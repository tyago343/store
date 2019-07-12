const User = require ('../db/models/User.js');
const router = require ('express').Router();
const uuid = require ('uuid/v4');
const passport = require ('passport')

router.get('/', (req, res) => {
    User.findAll()
    .then(response=>{
        res.send(response.data)
    })
})
router.post('/', (req, res) => {
    const { body } = req;
    User.create({
        id: uuid(),
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        password: body.password
    })
    .then(response=>{
        res.send(response)
    })
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    User.findByPk(id)
    .then(response => {
        res.send(response)
    })
});
router.post('/login', passport.authenticate('local'), (req, res) => {
    const authenticated = req.isAuthenticated();
    if(authenticated){
        res.send({
            id:req.user.id,
            name: req.user.name,
            lastName: req.user.lastName,
            email: req.user.email,
        }) 
    }
});

module.exports = router;