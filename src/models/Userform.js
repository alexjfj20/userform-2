const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Userform = sequelize.define('userform', {
    // Definimos las columnas aquí
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
       // allowNull por defecto esta en true
    },

    first_name: {
        type: DataTypes.STRING
        // allowNull por defecto esta en true
    },

    last_name: {
        type: DataTypes.STRING
        // allowNull por defecto esta en true
    },

    birthday: {
        type: DataTypes.DATEONLY
        // allowNull por defecto esta en true
    }

});

module.exports = Userform;