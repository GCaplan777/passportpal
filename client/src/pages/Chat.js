import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const socket = io();

const Chat = () => {
  const [chats, setChats] = useState([]);
  const nameRef = useRef();
  const msgRef = useRef();

  useEffect(() => {
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
      <form onSubmit={handleSumbit}>
        <div className="form-group">
          <input
            ref={nameRef}
            className="form-control"
            name="name"
            type="text"
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <input ref={msgRef} className="form-control" name="message" placeholder="message" />
        </div>
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
