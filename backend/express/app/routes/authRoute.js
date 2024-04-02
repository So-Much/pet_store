const router = require('express').Router();
const authController = require('../controllers/authController');
const passport = require('passport');


// ROUTE : []: /auth
// router.post('/login',passport.authenticate("local"), authController.login);
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (!user) {
        return res.status(400).send([user, "Cannot log in", info]);
      }
      req.login(user, (err) => {
        res.send('Logged in');
      });
    })(req, res, next);
}, (req, res, next) => {
    return res.status(500).json({message: 'Internal Server Error'})
})

router.get('/logout', authController.logout);

module.exports = router