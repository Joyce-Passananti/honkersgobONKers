// Data model for a user object
module.exports = (Sequelize, sequelize) => {
    const user = sequelize.define(
        'user',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: Sequelize.STRING,    // define column: firstName
            lastName: Sequelize.STRING,     // define column: lastName
        }
    );
    return user;
}