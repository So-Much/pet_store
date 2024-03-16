const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const { generateToken } = require("./middlewares/JWTMiddleware");
const mongoose = require('mongoose');
const userRoute = require('./routes/user')

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pet_store')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Body Parser for POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

app.post('/upload', upload.single('avatar'), async (req, res) => {
  try {
    const user = new User({ avatar: req.file.path });
    await user.save();
    res.send('Avatar uploaded successfully');
  } catch (error) {
    console.error('Error uploading avatar:', error);
    res.status(500).send('Internal Server Error');
  }
});

// userRoute
app.use('/api/user', userRoute)




// const GoogleStratery = require('passport-google-oauth20').Strategy;

// app.use(session({
//   secret
// }))

// app.use(new GoogleStratery({
//   clientID: 'your-client-id',
//   clientSecret: 'your-client-secret',
//   callbackURL: 'http://localhost:3000/auth/callback'
// },
// (accessToken, refreshToken, profile, done)))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// // Sử dụng authenticateToken middleware trong các route cần xác thực
// app.get('/profile', authenticateToken, (req, res) => {
//     res.json(req.user); // Trả về thông tin user từ token
// });

// Route để xác thực và tạo token
app.post("/login", (req, res) => {
  // Xác thực user, ví dụ như kiểm tra username và password
  const { username, password } = req.body;
  // check username and password

  // Tạo token cho user đã xác thực
  const token = generateToken(user);
  res.json({ token: token }); // Trả về token cho client
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
