const express = require('express');
const router = express.Router();
const ribbonController = require('../controllers/ribbonController');
// 
// const expressLayouts = require('express-ejs-layouts');


/**
 * App Routes 
*/
router.get('/', ribbonController.homepage);
router.get('/blog', ribbonController.exploreBlog)
// router.get('/categories', ribbonController.exploreCategories);




module.exports = router;
