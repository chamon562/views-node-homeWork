const express = require('express')
//router = express.Router() with capital R
const router = express.Router()
//the new way to get starting with router
//favorite animals 
router.get('/animals', (req, res) =>{
    res.render('hates/animals', {title: 'Least Favorite Animals', animals: ['spiders', 'mosquitos', 'worms']})
})
// favorite foods
router.get('/foods', (req, res) =>{
    res.render('hates/foods', {title: 'Least Favorite Foods', foods: ['spiders', 'worms', 'bitter melon']})
})
// dont forget module.exports = router at the very bottom
module.exports = router