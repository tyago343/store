const User = require ('../db/models/User.js');
const router = require ('express').Router();
const uuid = require ('uuid/v4');

router.get('/', (req, res) => {
    User.findAll()
    .then(response=>{
        res.send(response.data)
    })
})
router.post('/', (req, res) => {
    const { body } = req;
    console.log(req)
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

module.exports = router;