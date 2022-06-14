const List = require('./list');
const Card = require('./card');
const Label = require('./label');

List.hasMany(Card, {
  foreignKey: "list_id",
  as: "card"
});

Card.belongsTo(List, {
  foreignKey: "list_id",
  as : "list"
});

Card.belongsToMany(Label, {
  through : "card_own_label",
  foreignKey: "card_id",
  otherKey: "label_id",
  as: "labels"
});

Label.belongsToMany(Card, {
  through : "card_own_label",
  foreignKey: "label_id",
  otherKey: "card_id",
  as: "cards"
});

module.exports = {List, Card, Label};