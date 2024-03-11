const express = require('express')
const app = express()
const port = 3000
const session = require('express-session');
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// // Sử dụng authenticateToken middleware trong các route cần xác thực
// app.get('/profile', authenticateToken, (req, res) => {
//     res.json(req.user); // Trả về thông tin user từ token
// });

// // Route để xác thực và tạo token
// app.post('/login', (req, res) => {
//     // Xác thực user, ví dụ như kiểm tra username và password
//     const user = { id: 1, email: 'example@example.com' };
//     // Tạo token cho user đã xác thực
//     const token = generateToken(user);
//     res.json({ token: token }); // Trả về token cho client
// });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})