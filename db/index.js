const Sequelize = require ('sequelize');
const db = new Sequelize('postgres://localhost:5432/almacen');
module.exports = db;