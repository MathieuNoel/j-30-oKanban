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
  removeAssociationFromCard: async (req, res) => {
    try {
    const {card_id, label_id} = req.params
      const card = await Card.findByPk(card_id)
      const label = await Label.findByPk(label_id) 
      console.log(card, label)     
      if(card){
        if(label){
          const modifiedCard = await card.removeLabel(label)
          res.json(modifiedCard)
        } else {
          res.status(404).json({
            message: 'Le label demandée n\'existe pas',
          });
        }
      } else {
        res.status(404).json({
          message: 'La carte demandée n\'existe pas',
        });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la suppression  du label',
      });
    }
  
  }
}

module.exports = deleteController;