import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  FormControl,
  InputLabel,
  FormGroup,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  ListItemText,
  Avatar,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import io from "socket.io-client";

let socket;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    alignItems: "center",
  },
  inline: {
    display: "inline",
  },
}));

const Chat = () => {
  const classes = useStyles();
  const [chats, setChats] = useState([]);
  const [participants, setParticipants] = useState([]);

  const msgRef = useRef();

  useEffect(() => {
    socket = io({
      query: {
        name: JSON.parse(localStorage.getItem("user")).name,
      },
    });

    socket.on("join", (name) => {
      setParticipants((participants) => [...participants, name]);
    });

    socket.on("message", (message) => {
      setChats((chats) => [...chats, message]);
    });
  }, []);

  const getFirstName = (name) => {
    return name.split(" ")[0];
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    socket.emit("message", {
      name: getFirstName(JSON.parse(localStorage.getItem("user")).name),
      message: msgRef.current.value,
    });
    msgRef.current.value = "";
  };

  return (
    <>
      <Card>
        <CardContent className={classes.root}>
          <List>
            <h1>Current Participants</h1>
            {participants.length >= 0 &&
              participants.map((participant) => (
                <ListItem button divider>
                  <ListItemText primary={participant} />
                </ListItem>
              ))}
          </List>
          <List>
            {chats.length !== 0 &&
              chats.map(({ name, message }, index) => (
                <>
                  <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                      <Avatar>{name[0].toUpperCase()}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {message}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </>
              ))}
          </List>
        </CardContent>
        <form onSubmit={handleSumbit}>
          <FormGroup>
            <FormControl margin="normal">
              <InputLabel htmlFor="msg">Message</InputLabel>
              <Input
                id="msg"
                inputRef={msgRef}
                name="message"
                type="text"
                placeholder="message"
                required={true}
              />
            </FormControl>
          </FormGroup>

          <button type="submit">submit</button>
        </form>
      </Card>
    </>
  );
};

export default Chat;
