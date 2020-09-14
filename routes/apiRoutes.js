const Router = require("express").Router();
const userController = require("../controllers/userController");
const GridFsStorage = require ('multer-gridfs-storage')
const multer = require('multer');
const crypto = require('crypto')
const db = require('../models');
// Create storage engine
const storage = new GridFsStorage({
  // process.env.MONGODB_URI || 
  url: 'mongodb://localhost:27017/passportpal',
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
})
const upload = multer({ storage })

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
  let fileName = req.file.filename
  let updatedUser = await db.User.findByIdAndUpdate({_id: req.params.id}, {planeTicket: fileName} )
  console.log(req.file.filename)
  // if (err) throw err;
  
  res.status(201).send()
})

Router.get('/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists',
      })
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
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
