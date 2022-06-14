
const {List} = require('../models');

const mainController = {
  homePage: async (req, res) => {
    try {
      const lists = await List.findAll()      
     console.log('LALALA',lists)
     res.render('home',{lists})      
    } catch (error) {
      
    }
  }
}

module.exports = mainController;