const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const { generateToken } = require("./middlewares/JWTMiddleware");
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const fileupload = require('express-fileupload');

// Routes
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const authRoute = require('./routes/authRoute');
const session = require("express-session");

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pet_store')
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Body Parser for POST requests
const upload = multer()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileupload({
    createParentPath: true,
  }),
);
app.use(cors());
// app.use(upload.any());

app.use(session({
  secret: 'PET_STORE_SECRET_KEY',
  resave: false,
  saveUninitialized: true,
}));

// userRoute
app.use('/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)




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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
