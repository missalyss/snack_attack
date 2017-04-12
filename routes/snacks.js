var express = require('express')
var router = express.Router()
const knex = require('../db/knex')


router.get('/', function(req, res, next) {
  knex('snacks').then(function (allSnacks) {
    res.render('index', {allSnacks})
  })
})

router.get('/new', function(req, res, next) {
  res.render('new')
})

router.get('/:id', function (req, res, next) {
  var id = req.params.id
  knex('snacks').where({ id }).then(function (oneSnack) {
    console.log(oneSnack);
    res.render('view-one', {oneSnack})
  })
})

router.post('/', function (req, res, next) {
  var snack = {
    name, img_url, rating, review
  } = req.body
  console.log(snack);
  knex('snacks').insert(snack).then(function() {
    res.redirect('/snacks')
  })
})

module.exports = router
