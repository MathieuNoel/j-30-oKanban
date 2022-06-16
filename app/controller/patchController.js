const {List, Card, Label} = require('../models');

const patchController = {
  updateOneList: async function(req, res) {
    try {
      // on pourrait utiliser update mais c'est plutôt pour prévu pour mettre à jour DES lignes
      // je pars de la demande
      const { id } = req.params;
      const { name, position } = req.body;
      if (!id) {
        res.status(400).json({
          message: 'Le champ id est obligatoire',
        });
      }
      else {
        // je vais trouver la ligne demandée
        const list = await List.findByPk(id);
        if (list) {
          // et la modifier
          if (name) {
            list.name = name;
          }
          if (position) {
            list.position = Number(position);
          }
          // et persister
          const listSaved = await list.save();
          res.json(listSaved);
        }
        else {
          res.status(404).json({
            message: 'La liste demandée n\'existe pas',
          });
        }
      }
    } catch(error) {
      console.log(error);
      res.status(500).json({
        message: 'Erreur lors de la mise à jour de la liste',
      });
    }
  },
  updateOneCard: async (req, res) =>{
    try {
    const {id} = req.params
    const {title, desctiption, color, position, list_id} = req.body
    if (!id) {
      res.status(400).json({
        message: 'Le champ id est obligatoire',
      });
    } else {
      const updatedCard = await Card.findByPk(id);
      if(updatedCard){
        if(title){
          updatedCard.title = title
        }
        if(desctiption){
          updatedCard.desctiption = desctiption
        }
        if(color){
          updatedCard.color = color
        }
        if(position){
          updatedCard.position = position
        }
        if(list_id){
          updatedCard.list_id = list_id
        }
        const updatedOneCard = await updatedCard.save()
        res.json(updatedOneCard)
      } else {
        res.status(404).json({
          message: 'La carte demandée n\'existe pas',
        });
      }
    }
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la mise à jour de la liste',
      });
    }
  },
  updateOneLabel: async (req, res) =>{
    try {
      const {id} = req.params
      const {title, color} = req.body
      if (!id) {
        res.status(400).json({
          message: 'Le champ id est obligatoire',
        });
      } else {        
        const updatedOneLabel = await Label.findByPk(id)
        if(updatedOneLabel){
          if(title){
            updatedOneLabel.title = title
          }
          if(color){
            updatedOneLabel.color = color
          }
          const labelupdated = await updatedOneLabel.save()
          res.json(updatedOneLabel)
        } else {
          res.status(404).json({
            message: 'Le label demandée n\'existe pas',
          });
        }    
        const updatedCard = await updatedOneLabel.save()
        res.json(updatedCard)
    }} catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la mise à jour de la liste',
      });
    }
  },
}

module.exports = patchController;