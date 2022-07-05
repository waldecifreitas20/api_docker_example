const app = require('./app');
const config = require('./config/database');

console.log(config);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('SERVER LISTENING AT ' + PORT);
});