const express = require('express');
const router = express.Router();
const ribbonController = require('../controllers/ribbonController');

// const expressLayouts = require('express-ejs-layouts');


/**
 * App Routes 
*/
router.get('/', ribbonController.homepage);
router.get('/blog', ribbonController.exploreBlog);
// router.get('blogSearchResults/:id', ribbonController.exploreSearch);
// router.get('/plants', ribbonController.explorePlants);
router.post('/searchResults', ribbonController.searchBlog);




module.exports = router;
