const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

// init server
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const routes = require('./routes/index.js');
const logger = require('morgan');
const Grid = require('gridfs-stream');
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

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
let gfs

mongoose.connection.once('open', () => {
  console.log(mongoose.connection.db)
  gfs = Grid(mongoose.connection.db, mongoose.mongo)
  gfs.collection('uploads')
  console.log('Connection Successful')
})

// /** Seting up server to accept cross-origin browser requests */
// app.use(function(req, res, next) { //allow cross origin requests
//   res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

// routes
// app.use('/api', require('./routes/file'));
app.use(routes);

// init socket
io.on('connect', (socket) => {
  // console.log(socket.handshake.query.name);

  io.emit('join', socket.handshake.query.name);

  socket.on('message', (msg) => {
    io.emit('message', msg);
  });

  socket.on('left', (msg) => {
    console.log(msg);
    io.emit('left', msg);
  });
});

http.listen(PORT, () => {
  console.log(`server start listening on ${PORT} `);
});
