const Sequelize = require ('sequelize');
const db = new Sequelize('postgres://santiago:your-preferred-password@localhost:5432/almacen');
module.exports = db;