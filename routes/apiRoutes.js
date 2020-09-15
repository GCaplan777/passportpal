const Router = require("express").Router();
const userController = require("../controllers/userController");
const GridFsStorage = require ('multer-gridfs-storage')
const multer = require('multer');
const crypto = require('crypto')
const db = require('../models');
const Grid = require('gridfs-stream');
// Create storage engine
const  mongoose = require('mongoose');
// let gfs

// connection.once('open', () => {
//   console.log(connection.db)
//   gfs = Grid(connection.db, mongoose.mongo)
//   gfs.collection('uploads')
//   console.log('Connection Successful')
// })

const storage = new GridFsStorage({
  
  url: process.env.MONGODB_URI || 'mongodb://localhost:27017/passportpal',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = file.originalname
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        }
        resolve(fileInfo)
      })
    })
  },
  
}

)
const upload = multer({ storage })
let gfs

mongoose.connection.once('open', () => {
  console.log(mongoose.connection.db)
  gfs = Grid(mongoose.connection.db, mongoose.mongo)
  gfs.collection('uploads')
  console.log('Connection Successful')
})
// routes that we want to protect
Router.get("/welcome", (req, res) => {
  res.send("Welcome to Passport Pal.");
});

// Router.post("/api/user-profile", (req, res) => {
//   res.send("Welcome to Passport Pal.");
// });

Router.route("/users").post(userController.createNew);
Router.post('/files/:id', upload.single('img'), 
  async (req, res, err) => {
  console.log(req.file)
  //add file name to user
  let fileName = req.file.md5
  let updatedUser = await db.User.findByIdAndUpdate({_id: req.params.id}, {"$push": {documentsUploaded: fileName} } )
  console.log(fileName)
  // if (err) throw err;
  
  res.status(201).send()
})
Router.get('/users/:id', (req,res) => {
  console.log("yot")
  console.log(req.params.id)
  db.User.findById(req.params.id).then(user => {
    console.log(user)
    res.send(user)
  })
  //res.end("yo")
})

Router.get('/files/:filename', (req, res) => {
  console.log("here")
  gfs.files.findOne({ md5: req.params.filename }, (err, file) => {
    // Check if file
    console.log(file)
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists',
      })
    }
    console.log("test1")
    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      console.log("test")
      const readstream = gfs.createReadStream(file.filename)
      readstream.pipe(res)
    } else {
      res.status(404).json({
        err: 'Not an image',
      })
    }
  })
})
module.exports = Router;
