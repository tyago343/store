const User = require ('../db/models/User.js');
const router = require ('express').Router();


router.get('/', (req, res) => {
    User.create()
})