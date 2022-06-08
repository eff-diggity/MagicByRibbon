const Category = require("../models/Category");
const mongoose = require('mongoose');
const BlogPost = require("../models/BlogPost");

// ******************************************
// from video--->
// require('../models/blogdb');
// const Category = require('../models/Category');


// mongoose.connect("mongodb+srv://eff-diggity:m4gicbyribb0n@cluster0.dybqhon.mongodb.net/?retryWrites=true&w=majority");

// , { useNewUrlParser: true, useUnifiedTopology: true });
// ******************************************


/**
 * Get/
 * Homepage
 */
exports.homepage = async (req, res) => {
    try {//base query to grab categories
        const limitNumber = 3; //CHANGE WHEN ADD BLOG CATEGORIES/add shop and workshop page
        const categories = await Category.find({}).limit(limitNumber);

        res.render('index', { title: 'Ribbon Home', categories });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occurred" });
    }
}


/**
 * Get/blog
 * blog
 */
exports.exploreBlog = async (req, res) => {
    try {//base query to grab categories
        const limitNumber = 5; //CHANGE WHEN ADD BLOG CATEGORIES/more blog posts/add shop and workshop page
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await BlogPost.find({}).sort({_id: -1}).limit(5)

        res.render('blog', { title: 'Ribbon Blog', categories });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occurred" });
    }
}


// *************************************************************************
/** Commented this out so that it doesn't insert category on every run.
 *  this can be used as template for all object posted to DB
 */

// ~~~~~~~~blog post test~~~~~~~~
// const tarot = new BlogPost(
//     {
//         title: "The tarot will teach you how to create a soul,/n- Jodorowsky's Holy Mountain, ",
//         category: "Tarot",
//         text: "The cards are more than just a tool, they are a mirror that reflects to us a higher intelligence.Their form and figures are spirits in their own right, given life by the tradition of countless souls who told fortunes with their aid.The Tarot tells the story of the Fool's Journey and the archetypal forces that populate our universe(as well as the space within us) /n In my years traversing the attics and swamps of this world I have become especially fond of the Italian tarot decks as well as related games like tarocchi and minchiate.The link between divination tools and gaming is ancient.It goes back to the period where 'games of chance', 'casting lots' and 'telling fortunes' couldn't be distinguished from one another as cultural activities.Perhaps because more people back then had the sense to regard these as dangerous activities involving spirits of destiny and providence.",
//         image: "https://i.imgur.com/LwRipAA.png",

//     }
// )
// tarot.save().then((newTarotCategory) => { console.log(newTarotCategory) });


// ~~~~~~~~blog category test~~~~~~~~
// const tarot = new Category(
//     {
//         name: "Tarot",
//         image: "tarot.png"
//     }
// )
// tarot.save().then((newTarotCategory) => { console.log(newTarotCategory) });






// *************************************************************************
//from tutorial
// async function insertDummyData() {
//     try {
//         await Category.insertMany([
//             {
//                 "name": "blog title",
//                 "image": "dragon.png"
//             }
//         ]);
//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDummyData();
