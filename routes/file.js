const router = require('express').Router();
const multer = require('multer');
const {db} = require('../config');
const { mongo, connection } = require('mongoose');
const Grid = require('gridfs-stream');
Grid.mongo = mongo;
let gfs;
let storage;
// connection.once("open", function() {
//   gfs=Grid(connection.db);
  // set up connection to db for file storage
  // Create storage engine 
// const storage = new GridFsStorage({ 
//   url: process.env.MONGODB_URI || 'mongodb://localhost:27017/passportpal',
//    file: (req, file) => { 
//     return new Promise((resolve, reject) => { 
//       crypto.randomBytes(16, (err, buf) => { 
//         if (err) { return reject(err); } 
//       const filename = file.originalname; 
//       const fileInfo = { filename: filename, bucketName: "uploads" }; 
//       resolve(fileInfo); }); }); } }); 
//       const upload = multer({ storage });
//       console.log(file)
//       app.post("/api/files", upload.single("img"), (req, res, err) => { if (err) throw err; res.status(201).send(); });

// }) 

// sets file input to single file
// const singleUpload = multer({ storage: storage }).single('file');
// router.get('/files/:filename', (req, res) => {
//   gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
//     if(!files || files.length === 0){
//       return res.status(404).json({
//         message: "Could not find file"
//       });
//     }
//     var readstream = gfs.createReadStream({
//       filename: files[0].filename
//     })
//     res.set('Content-Type', files[0].contentType);
//     return readstream.pipe(res);
//   });
// });
// router.get('/files', (req, res) => {
//   gfs.files.find().toArray((err, files) => {
//     if(!files || files.length === 0){
//       return res.status(404).json({
//         message: "Could not find files"
//       });
//     }
//     return res.json(files);
// });
// })
// router.post('/files', singleUpload, (req, res) => {
//   if (req.file) {
//     console.log(req.file)
//     return res.json({
//       // success: true,
//       // headers: req.headers,
//       file: req.file
//     });
//   }
//   res.send({ success: false });
// });
// router.delete('/files/:id', (req, res) => {
//   gfs.remove({ _id: req.params.id }, (err) => {
//     if (err) return res.status(500).json({ success: false })
//       return res.json({ success: true });
//     })
// })
module.exports = router;