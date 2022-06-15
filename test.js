require('dotenv').config();

const List = require('./app/models/list');

const doSomeTests = async () => {
  try {
    const results = await List.findAll();
    console.log(results);
  }
  catch (error) {
    console.trace(error);
  }
};

doSomeTests();