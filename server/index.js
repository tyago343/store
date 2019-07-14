const express = require ('express');
const app = require ('express')();
const bodyParser = require ('body-parser');
const path = require ('path');
const UserRouter = require ('../routes/User-routes.js');
const db = require ('../db/index.js');
const passport = require ('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require ('../db/models/User.js');

db.sync({force:true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));

app.use(passport.initialize());
app.use(passport.session())



app.use('/api/v1/users', UserRouter);

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
      User.findOne({ where: { email: username }})
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.passwordHash(password, user.salt) != user.password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      })
    }
  ));
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
});
app.listen(8080,()=>{
    console.log('Server listening')
})
module.exports=app;