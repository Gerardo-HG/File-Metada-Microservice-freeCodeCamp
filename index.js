const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const multer = require('multer');

// Configuración de almacenamiento
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middlewares
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

const uploadFile = upload.single('upfile');


app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


// Endpoint to analyze
app.post('/api/fileanalyse', uploadFile,(req,res)=> {
  if (!req.file) return res.status(400).json({ error: 'No enviaste ningún archivo'})

  const {originalname, mimetype, size} = req.file;

  res.json({
    name : originalname,
    type: mimetype,
    size: size
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
