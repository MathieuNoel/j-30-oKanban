const express = require('express');
const router = express.Router();
const getController = require('./controller/getController');
const postController = require('./controller/postController');
const patchController = require('./controller/patchController');
const deleteController = require('./controller/deleteController');

router.get('/list', getController.allList);
router.get('/list/:id', getController.oneList);
router.post('/list', postController.createList);
router.patch('/list/:id', patchController.updateOneList);
router.delete('/list/:id', deleteController.deleteOneList);

router.get('/card', getController.allCard);
router.get('/card/:id', getController.oneCard);
router.post('/card', postController.creatCard);
router.patch('/card/:id', patchController.updateOneCard);
router.delete('/card/:id', deleteController.deleteOneCard);

router.get('/label', getController.allLabel);
router.get('/label/:id', getController.oneLabel);
router.post('/label', postController.createLabel);
router.patch('/label/:id', patchController.updateOneLabel);
router.delete('/label/:id', deleteController.deleteOneLabel);







module.exports = router;