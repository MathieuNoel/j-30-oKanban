const {List, Card, Label} = require('../models');

const getController = {
  allList: async (req, res) => {
    try {
      const lists = await List.findAll()
      console.log(lists)    
      res.json(lists) 
    } catch (error) {
      console.log(error)
    }
  },
  oneList: async (req,res) => {
    const id = +req.params.id
    try {
      const list = await List.findByPk(id)
      res.json(list)
    } catch (error) {
      console.log(error)
    }
  },
  allCard: async (req, res) => {
    try {
      const cards = await Card.findAll()    
      res.json(cards) 
    } catch (error) {
      console.log(error)
    }
  },
  oneCard: async (req,res) => {
    const id = +req.params.id
    try {
      const card = await Card.findByPk(id)
      res.json(card)
    } catch (error) {
      console.log(error)
    }
  },
  allLabel: async (req, res) => {
    try {
      const labels = await Label.findAll()    
      res.json(labels) 
    } catch (error) {
      console.log(error)
    }
  },
  oneLabel: async (req,res) => {
    const id = +req.params.id
    try {
      const label = await Label.findByPk(id)
      res.json(label)
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = getController;
