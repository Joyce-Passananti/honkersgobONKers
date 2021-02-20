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
            username: Sequelize.STRING,
            password: Sequelize.STRING,
            age: Sequelize.INTEGER
        }
    );
    return user;
}