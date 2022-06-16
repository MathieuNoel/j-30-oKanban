const {List} = require('../models');

const putController ={
  createOrUpdateList: async (req, res) => {
    const {id} = req.params
    const {name, position} = req.body
    console.log(id,name,position)
    try {
      const list = await List.findByPk(id)
      if (list){
        if(name){
          list.name = name  
        }
        if(position){
          list.position = position
          const upgradedList = await list.save()
        }
        res.json(list)
      } else {
      const createList = await List.create({
        name, 
        position
      })
      res.json(createList)
      }
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de la création ou la modification de la liste',
      });
    }
  }
}
module.exports = putController;