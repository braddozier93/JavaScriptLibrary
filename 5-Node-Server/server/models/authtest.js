//in order to use authenticated routes, we need a new table in our database that we can place behind an authentication barrier
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('authtestdata', {
        authtestdata: DataTypes.STRING,//we are providing two properties: authtestdata and owner
        owner: DataTypes.INTEGER
    });
};