const {List, Card, Label} = require('../models');

const postController = {
  createList: async function(req, res) {
    // on gère toujours le scénario d'erreur avec nos promesses
    try {
      // const name = req.body.name;
      // const position = req.body.position;
      const { name, position } = req.body;
      
      // on peut valider les données qu'on reçoit et prévoir une réponse custom
      if (!name) {
        res.status(400).json({
          message: 'Le champ name est obligatoire!',
        });
      }
      else {
        // create revient au même que build + save
        const newList = await List.create({
          name: name,
          position: position,
        });
        res.json(newList);
      }
    } catch(error) {      
      res.status(500).json({
        message: 'Erreur lors de la création de la liste',
      });
    }
  },
  creatCard: async (req, res) => {
    const { title, description, color, position, list_id } = req.body
    if(!title){
      res.status(400).json({
        message: 'le champ title est obligatoire!'
      })
    }
    if(!position){
      res.status(400).json({
        message: 'le champ position est obligatoire!'
      })
    }
    const createdCard = await Card.create({
      title,
      description, 
      color, 
      position, 
      list_id
    })
    res.json(createdCard)
  },
  createLabel: async (req, res) => {
    const {title, color} = req.body
    if(!title){
      res.status(400).json({
        message: 'le champ title est obligatoire!'
      })
    }
    const createdLabel = await Label.create({
      title,
      color
    })
    res.json(createdLabel)
  },
  addLabelToCard: async (req, res) => {
    try {
      const {id} = req.params
      const {label_id} = req.body
      const card = await Card.findByPk(id, {include:'labels'});
      const label = await Label.findByPk(label_id)
      if(card){       
        const addedLabelOnCard = await card.addLabel(label)
        res.json(addedLabelOnCard)
      } else {
        res.status(404).json({
          message: 'La carte demandée n\'existe pas',
        });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Erreur lors de l\'association du label',
      });
    }
  },
  

}

module.exports = postController