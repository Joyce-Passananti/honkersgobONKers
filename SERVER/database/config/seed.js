const seed = function (user) {
    return Promise.all([
        // Seed preset values into the database upon server start
        user.create({firstName: 'Christine', lastName: 'Alvarado'}),
        user.create({firstName: 'Albert', lastName: 'Chern'}),
        user.create({firstName: 'Sanjoy', lastName: 'Dasgupta'}),
        user.create({firstName: 'Hadi', lastName: 'Esmaeilzadeh'}),
        user.create({firstName: 'Nadia', lastName: 'Heninger'})

    ]).catch(function (error) {
        console.log("Initialize database failed");
    })
};

module.exports = seed;