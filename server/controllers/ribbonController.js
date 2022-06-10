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
        const limitNumber = 5; //CHANGE WHEN ADD BLOG CATEGORIES/add shop and workshop page
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
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        // category= db category, can add .limit(limitNumber) when blog grows 
        const plantPosts = await BlogPost.find({ 'category': 'Plants Medicine' });
        const tarotPosts = await BlogPost.find({ 'category': 'Tarot' });
        const astrologyPosts = await BlogPost.find({ 'category': 'Astrology' });
        const occultPosts = await BlogPost.find({ 'category': 'Occult History' });
        const classesPosts = await BlogPost.find({ 'category': 'Classes' });

        const post = { plantPosts, tarotPosts, astrologyPosts, occultPosts, classesPosts }

        res.render('blog', { title: 'Ribbon Blog', categories, post });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occurred" });
    }

}

/**
 * POST/searchResults
 * SearchResults
 */
exports.searchBlog = async (req, res) => {
    try {
        
        let searchTerm = req.body.searchTerm; //body bc coming from a form
        let blog = await BlogPost.find({ $text: { $search: searchTerm, $diacriticSensitive: true } });
        res.json(blog); test
        res.render('searchResults', { title: 'Ribbon Search Results', blog });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occurred" });
    }
    // res.render('searchResults', { title: 'Ribbon Search Results', blog });

}


/**
 * Get/plantPosts
 * PlantPosts
 */
// exports.explorePlants = async (req, res) => {
//     try {//base query to grab categories
//         const limitNumber = 5; //CHANGE WHEN ADD BLOG CATEGORIES/add shop and workshop page
//         const categories = await Category.find({}).limit(limitNumber);

//         res.render('plantPosts', { title: 'Plant Medicine', categories });
//     } catch (error) {
//         res.status(500).send({ message: error.message || "Error Occurred" });
//     }
// }









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

// const plantMedicine = new BlogPost(
//     {
//         title: "Heartsease",
//         category: "Plant Medicine",
//         text: "Heartsease,  classic flower of Venus, perfect for this Friday, or in German, Freitag (Freyja’s Day). Additnioally- “Pansies” have long been associates with queerness. These are the traditional flower for love charms, for a gentle modern folk magical use try them in a bath for self love. They're also tasty and nutritious for topping salads. The tincture is energetically cooling, and specifically indicated for breast health. Some contemporary herbalists recommend viola species for assistance in the grieving process. Viol species are classed as demulcents, as they’re moistening to the system. They have a long tradition of use as a gentle expectorant, and can help heal the respiratory system. Magic, medicine, nutrition, botany, literature, and art are not separate. They cross over, they inform one another. These are all ways of knowing, lenses for seeing and experiencing something as simple and lovely as these pansies, Johnny-Jump-Ups, or my favorite common name, Heartsease.",
//         image: "https://i.imgur.com/XsFpYZz.png",

//     }
// )
// plantMedicine.save().then((newplantMedicineCategory) => { console.log(newplantMedicineCategory) });

// const occultHistory = new BlogPost(
//     {
//         title: "The tarot will teach you how to create a soul,/n- Jodorowsky's Holy Mountain, ",
//         category: "Tarot",
//         text: "The Emerald Tablet of Hermes Trismegistus has fascinated generations of occultists and alchemists. The text is short, mystical, and cryptic. It is the source of the common magical maxim, 'As above, so below'. Despite the popularity of the Tablet's text, its origins are shrouded in mystery. Did such a tablet ever exist, and was it truly made of emerald? No physical evidence has been found, yet the text of the Emerald Tablet has been translated and retranslated throughout the centuries, inspiring philosophers, magicians, alchemists, and scientists. The earliest reference to The Emerald Tablet currently known to scholars comes from the Sirr al- khalīqa wa - ṣanʿat al - ṭabīʿa(The Secret of Creation and the Art of Nature), an alchemical text of uncertain authorship compiled in Arabic in the late 8th or early 9th century. Here's a translation of The Emerald Tablet by none other than Isaac Newton, the famed scientist: Tis true without lying, certain and most true. That which is below is like that which is above and that which is above is like that which is below to do the miracle of one only thing And as all things have been and arose from one by the mediation of one: so all things have their birth from this one thing by adaptation. The Sun is its father, the moon its mother, the wind hath carried it in its belly, the earth is its nurse. The father of all perfection in the whole world is here. Its force or power is entire if it be converted into earth. Separate thou the earth from the fire, the subtle from the gross sweetly with great industry. It ascends from the earth to the heaven and again it descends to the earth and receives the force of things superior and inferior. By this means you shall have the glory of the whole world and thereby all obscurity shall fly from you. Its force is above all force, for it vanquishes every subtle thing and penetrates every solid thing. So was the world created. From this are and do come admirable adaptations where of the means is here in this. Hence I am called Hermes Trismegistus, having the three parts of the philosophy of the whole world. That which I have said of the operation of the Sun is accomplished and ended."
//         image: "https://i.imgur.com/T5cNPZC.png",

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

    // const plantMedicine = new Category(
    //     {
    //         name: "Plant Medicine",
    //         image: "rue.png"
    //     }
    // )
    // plantMedicine.save().then((newPlantMedicineCategory) => { console.log(newPlantMedicineCategory) });

    // const occultHistory = new Category(
    //     {
    //         name: "Occult History",
    //         image: "hermes.png"
    //     }
    // )
    // occultHistory.save().then((newOccultHistoryCategory) => { console.log(newOccultHistoryCategory) });



    // const astrology = new Category(
    //     {
    //         name: "Astrology",
    //         image: "dragon.png"
    //     }
    // )
    // astrology.save().then((newAstrologyCategory) => { console.log(newAstrologyCategory) });


    // const classes = new Category(
    //     {
    //         name: "Classes",
    //         image: "witches.png"
    //     }
    // )
    // classes.save().then((newClassesCategory) => { console.log(newClassesCategory) });








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
