const env = require('./env');
const Sequelize = require('sequelize');     // Import Sequelize
const sequelize = new Sequelize(`postgres://${env.DATABASE_USERNAME}:${env.DATABASE_PASSWORD}@${env.DATABASE_HOST}:${env.DATABASE_PORT}/defaultdb?sslmode=verify-full&sslrootcert=cc-ca.crt&options=--cluster=honk-bonk-830`, {
    dialectOptions: {
        options: {
            encrypt: true
        }
    }
});
const seed = require('./seed');

// Connect to database
sequelize.authenticate()
    .then(function () {
        console.log('Connection Success');
    })
    .catch(function (error) {
        console.log('Connection Failed');
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('../models/user')(Sequelize, sequelize);     // Creates users table based on the user object specified in user.js
sequelize.sync({force: true})                                   // Delete and reseed database upon every instantiation
    .then(() => seed(db.users))                        // Seeds the preset values into the tables
    .catch(error => console.log("Query Failed " + error));

module.exports = db;