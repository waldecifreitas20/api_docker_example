const {
    username, 
    password, 
    database,
    dialect, 
    port, 
    host, 
} = require('../config/database');

const Sequelize = require('sequelize');
const db = new Sequelize(database, username, password, {
    host,
    dialect, 
    logging: false,
    define: {
        timestamps: false
    }
});

module.exports = {
    database: db,
    sequelize : Sequelize
};