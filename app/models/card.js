const { Model, DataTypes} = require('sequelize');
const sequelize = require('../database');

class Card extends Model {};

Card.init({
  description: {
    type : DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,    
  },
  position: {
    type : DataTypes.INTEGER,
    allowNull: false,

  }
},{
  sequelize,
  tableName: 'card'
})

module.exports = Card;

