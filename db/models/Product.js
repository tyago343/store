const Sequelize = require ('sequelize');
const db = require ('../index.js');
const crypto = require ('crypto');

const Product = db.define('product', {
    id:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        }
    },
    image: {
        type: Sequelize.STRING,
    }
})
module.exports = Product;