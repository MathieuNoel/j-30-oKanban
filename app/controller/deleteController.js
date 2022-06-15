const {List, Card, Label} = require('../models');

const deleteController = {
  deleteOneList: async (req, res) => {
    const id = +req.params.id
    try {
      const listById = await List.findByPk(id)
      const destroyedList = await listById.destroy()
      res.json(destroyedList)
    } catch (error) {
      
    }
  },
  deleteOneCard: async (req, res) => {
    const id = +req.params.id
    try {
      const cardById = await Card.findByPk(id)
      const destroyedCard = await cardById.destroy()
      res.json(destroyedCard)
    } catch (error) {
      
    }
  },
  deleteOneLabel: async (req, res) => {
    const id = +req.params.id
    try {
      const labelById = await Label.findByPk(id)
      const destroyedLabel = await labelById.destroy()
      res.json(destroyedLabel)
    } catch (error) {
      
    }
  },
}

module.exports = deleteController;