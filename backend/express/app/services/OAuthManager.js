const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://example.com/oauth2/authorize',
    tokenURL: 'https://example.com/oauth2/token',
    clientID: 'your-client-id',
    clientSecret: 'your-client-secret',
    callbackURL: 'http://localhost:3000/auth/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    // Thực hiện xác thực và tạo hoặc cập nhật thông tin người dùng
    return cb(null, profile);
  }
));
