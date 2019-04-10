const Sequelize = require ('sequelize');
const db = require ('../index.js');
const crypto = require ('crypto');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }, 
        unique: {
            args: true,
            msg: 'Este email ya lo usa otro cliente!'
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salt: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
User.passwordSalt = () => crypto.randomBytes(20).toString('hex');
User.prototype.passwordHash = (password, salt) => crypto.createHmac('sha1', salt).update(password).digest('hex');
User.hook('beforeCreate', (user) => {
    user.salt = User.passwordSalt();
    user.password = user.passwordHash(password, salt)
})
module.exports = User;