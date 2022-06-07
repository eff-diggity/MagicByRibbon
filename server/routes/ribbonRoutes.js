const express = require('express');
const router = express.Router();
const ribbonController = require('../controllers/ribbonController');
// 
const expressLayouts = require('express-ejs-layouts');


/**
 * App Routes 
*/
router.get('/', ribbonController.homepage);



module.exports = router;
