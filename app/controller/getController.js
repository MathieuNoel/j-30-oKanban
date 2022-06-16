const {List, Card, Label} = require('../models');

const getController = {
  allList: async function(req, res) {
    try {
      const listes = await List.findAll({
        include: {
          association: 'cards',
          include: 'labels',
        },
        order: [
          ['position', 'ASC'],
          ['name', 'ASC'],
        ],
      });
      res.json(listes);
    } catch (error) {
      // log pour moi développeur : un max de détail
      console.log(error);
      // reponse sans détail structuel pour le consommateur de ma bdd
      res.status(500).json({
        message: 'Erreur lors de la récupération des listes',
      });
    }
  },
  oneList: async (req,res) => {
    const id = +req.params.id    
    try {
      const result= await List.findByPk(id, {include: {
        association: 'cards',
        include: 'labels',}})
        
      res.json(result)
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la récupération de la liste',
      });
    }
  },
  allCard: async (req, res) => {
    try {
      const cards = await Card.findAll({
        include:'labels',
        order:[
          ['title', 'ASC'],
          ['description', 'ASC'],        
          ['color', 'ASC'],
          ['position', 'ASC']
      ]})    
      res.json(cards) 
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la récupération des cartes'
      })
    }
  },
  oneCard: async (req,res) => {
    const id = +req.params.id
    try {
      const card = await Card.findByPk(id, {include:'labels'})
      res.json(card)
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la récupération de la carte'
      })
    }
  },
  allLabel: async (req, res) => {
    try {
      const labels = await Label.findAll({include:'cards',order:[
        ['title', 'ASC'],
        ['color', 'ASC'],
      ]})    
      res.json(labels) 
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la récupération des labels'
      })
    }
  },
  oneLabel: async (req,res) => {
    const id = +req.params.id
    try {
      const label = await Label.findByPk(id, {include:'cards'})
      res.json(label)
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la récupération du label'
      })
    }
  },
  cardsOfList: async (req, res) => {
    const {id} = req.params
    try {
      const cardsByList = await List.findByPk(id, {
        include: {
          association : 'cards',
          include: 'labels'
        }
      });  
      res.json(cardsByList.cards)
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la récupération du label'
      })
    }
  }
}

module.exports = getController;