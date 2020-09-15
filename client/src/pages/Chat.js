import React, { useEffect, useRef, useState } from 'react';
import { Alert } from '@material-ui/lab';
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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import io from 'socket.io-client';

let socket;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '50vh',
    overflowY: 'scroll',
  },
  inline: {
    display: 'inline',
  },

  button: {
    margin: theme.spacing(1),
  },

  alert: {
    position: 'absolute',
    transition: 'all 0.3s',
    left: '50%',
    transform: 'translateX(-50%)',
  },
}));

const Chat = () => {
  const classes = useStyles();
  const [chats, setChats] = useState([]);
  const [alert, setAlert] = useState(null);

  const msgRef = useRef();

  useEffect(() => {
    socket = io({
      query: {
        name: JSON.parse(localStorage.getItem('user')).name,
      },
    });

    socket.on('join', (name) => {
      setAlert({ type: 'success', message: `${name} joined the chat` });

      setTimeout(() => {
        setAlert(null);
      }, 3000);
    });

    socket.on('left', (name) => {
      setAlert({ type: 'info', message: `${name} left the chat` });

      setTimeout(() => {
        setAlert(null);
      }, 3000);
    });

    socket.on('message', (message) => {
      setChats((chats) => [...chats, message]);
    });

    return () => {
      if (localStorage.getItem('user')) {
        socket.emit('left', JSON.parse(localStorage.getItem('user')).name);
      }
    };
  }, []);

  const getFirstName = (name) => {
    return name.split(' ')[0];
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    socket.emit('message', {
      name: getFirstName(JSON.parse(localStorage.getItem('user')).name),
      message: msgRef.current.value,
    });

    msgRef.current.value = '';

    const main = document.querySelector('#main');

    main.scrollTop = main.scrollHeight - main.clientHeight;
  };

  return (
    <>
      <Card>
        <CardContent id="main" className={classes.root}>
          {alert && (
            <Alert className={classes.alert} severity={alert.type}>
              {alert.message}
            </Alert>
          )}
          <List>
            {chats.length !== 0 &&
              chats.map(({ name, message }, index) => (
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
              ))}
          </List>
        </CardContent>
        <form onSubmit={handleSumbit}>
          <FormGroup>
            <FormControl margin="normal">
              <InputLabel htmlFor="msg">Message</InputLabel>
              <Input
                type="submit"
                id="msg"
                inputRef={msgRef}
                name="message"
                type="text"
                placeholder="message"
                required={true}
                autoComplete="off"
                variant="outlined"
              />
            </FormControl>
          </FormGroup>
        </form>
      </Card>
    </>
  );
};

export default Chat;
