var crypto = require('crypto');

const seed = function (user) {
    return Promise.all([
        // Seed preset values into the database upon server start
        user.create({username: 'testUsername1',
            password: crypto.createHash('sha256').update('test1').digest("hex"),
            age: 20}),
        user.create({username: 'testUsername2',
            password: crypto.createHash('sha256').update('test2').digest("hex"),
            age: 40}),
        user.create({username: 'testUsername3',
            password: crypto.createHash('sha256').update('test3').digest("hex"),
            age: 60})

    ]).catch(function (error) {
        console.log("Initialize database failed");
    })
};

module.exports = seed;