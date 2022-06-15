require('dotenv').config();

const models = require('./app/models');

const doSomeTests = async () => {
  try {
    const results = await models.List.findAll({
      include: 'cards',
    });
    console.log(results);
  }
  catch (error) {
    console.trace(error);
  }
};

doSomeTests();
