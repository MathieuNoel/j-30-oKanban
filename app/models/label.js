const { Model, DataTypes} = require('sequelize');
const sequelize = require('../database');

class Label extends Model {};

Label.init({
  name: {
    type : DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},{
  sequelize,
  tableName: "label"
})

module.exports = Label;