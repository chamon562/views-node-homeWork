const express = require('express')
//router = express.Router() with capital R
const router = express.Router()
//the new way to get starting with router
//favorite animals 
router.get('/animals', (req, res) =>{
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['Pandas', 'Cats', 'Penguins']})
})
// favorite foods
router.get('/foods', (req, res) =>{
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['Cambodian Fried Fish with spicy mango sauce', 'Korean Barbeque', 'Pho Noodles']})
})
// dont forget module.exports = router at the very bottom
module.exports = router