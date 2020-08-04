module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {//grabbing seq parameter and define what the table headers and types are
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true//won't let us create multiple accounts/users with the same email address
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return User;//return this whole user variable so it can be accessed
};
