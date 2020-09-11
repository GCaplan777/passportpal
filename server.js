const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors')
// init server
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const api = require('./routes/user.routes');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// database connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/passportpal',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
}

// routes
app.use(routes);

// init socket
io.on('connect', (socket) => {
  console.log('a user connected');
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});

http.listen(PORT, () => {
  console.log(`server start listening on ${PORT} `);
});
