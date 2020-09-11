import React, { useEffect, useRef, useState } from 'react';
import {
  Input,
  FormControl,
  InputLabel,
  FormGroup,
  Card,
} from '@material-ui/core';
import io from 'socket.io-client';

const socket = io();

const Chat = () => {
  const [chats, setChats] = useState([]);
  const nameRef = useRef();
  const msgRef = useRef();

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('user')).token);
    socket.on('message', (message) => {
      setChats((chats) => [...chats, message]);
    });
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();

    socket.emit('message', {
      name: nameRef.current.value,
      message: msgRef.current.value,
    });

    nameRef.current.value = '';
    msgRef.current.value = '';
  };

  return (
    <>
      <Card></Card>
      <form onSubmit={handleSumbit}>
        <FormControl>
          <Input
            inputRef={nameRef}
            name="name"
            type="text"
            placeholder="name"
            required="true"
          />
        </FormControl>
        <FormGroup>
          <FormControl margin="normal">
            <InputLabel htmlFor="msg">Message</InputLabel>
            <Input
              id="msg"
              inputRef={msgRef}
              name="message"
              type="text"
              placeholder="message"
              required="true"
            />
          </FormControl>
        </FormGroup>

        <button type="submit">submit</button>
      </form>
      <div>
        {chats.length !== 0 &&
          chats.map(({ name, message }, index) => (
            <div className="card" key={index}>
              <h3>{name}</h3>
              <p>{message}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Chat;
