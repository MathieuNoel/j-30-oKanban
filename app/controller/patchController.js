const {List, Card, Label} = require('../models');

const patchController = {
  updateOneList: async (req, res) =>{
    const id = +req.params.id
    try {
      const listById = await List.findByPk(id)
      listById.set({
        name : 'tata',
        position: 5
      })
      const updatedList = await listById.save()
      res.json(updatedList)
    } catch (error) {
      
    }
  },
  updateOneCard: async (req, res) =>{
    const id = +req.params.id
    try {
      const updatedOneCard = await Card.findByPk(id)
      updatedOneCard.set({
        title: 'i love iron',
        description: 'du fer ',
        color: 'f0f',
        position: 5,
        // list_id: 5
      })
      const updatedCard = await updatedOneCard.save()
      res.json(updatedCard)
    } catch (error) {
      
    }
  },
  updateOneLabel: async (req, res) =>{
    const id = +req.params.id
    try {
      const updatedOneLabel = await Label.findByPk(id)
      updatedOneLabel.set({
        title: 'tutu',
        color: 'f0f'
      })
      const updatedCard = await updatedOneLabel.save()
      res.json(updatedCard)
    } catch (error) {
      
    }
  },
}

module.exports = patchController;