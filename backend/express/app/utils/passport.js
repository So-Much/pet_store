const env = require('../config/enviroments/env')

const ggOptionsStrategy = {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: env.GOOGLE_CALLBACK_URL
};

const sessionOptions = {
    secret: env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
module.exports = {
    ggOptionsStrategy,
    GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER: env.GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER,
    sessionOptions
}