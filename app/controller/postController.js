const {List, Card, Label} = require('../models');

const postController = {
  createList: async (req, res) => {
    const createdList = await List.create({
      name: 'toto',
      position : 4
    })
    res.json(createdList)
  },
  creatCard: async (req, res) => {
    const createdCard = await Card.create({
      title: 'i love wood',
      description: 'j\'aime le bois',
      color: 'f0f',
      position: 4,
      list_id: 3
    })
    res.json(createdCard)
  },
  createLabel: async (req, res) => {
    const createdLabel = await Label.create({
      title: 'coincoin',
      color: '666666',
    })
    res.json(createdLabel)
  }

}

module.exports = postController