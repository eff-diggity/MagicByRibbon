const express = require('express');
const router = express.Router();
const ribbonController = require('../controllers/ribbonController');
// 
// const expressLayouts = require('express-ejs-layouts');


/**
 * App Routes 
*/
router.get('/', ribbonController.homepage);
router.get('/blog', ribbonController.exploreBlog);
// router.get('/categories', ribbonController.exploreCategories);

//switched to ejs, so calling the Contact function from ribbonController

// router.get('/contact', ribbonController.insertDummyContactData);

module.exports = router;
