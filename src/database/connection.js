const {database} = require('./sequelize');

module.exports = async function() {
    await database.authenticate()
    .then(() => {
        console.log('DATABASE CONECTED');
    })
    .catch((err) => {
        console.log('CONNECTION REFUSED');
        console.log(err);
    });
}