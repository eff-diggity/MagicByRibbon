const express = require('express');
const router = express.Router();
const ribbonController = require('../controllers/ribbonController');

/**
 * App Routes 
*/
router.get('/', ribbonController.homepage);
router.get('/blog', ribbonController.exploreBlog);

router.post('/searchResults', ribbonController.searchBlog);
module.exports = router;
