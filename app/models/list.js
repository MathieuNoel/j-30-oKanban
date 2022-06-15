const { Model, DataTypes} = require('sequelize');
const sequelize = require('../database');

class List extends Model {}

List.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  position: {
    type : DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
}, {
  sequelize,
  tableName: "list"
});

module.exports = List;