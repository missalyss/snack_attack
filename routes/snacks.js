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

router.get('/:id/delete', function(req, res, next) {
  var id = req.params.id
  console.log(id);
  knex('snacks').where('id', req.params.id).then(function (snack) {
    console.log(snack);
    res.render('delete', {snack})
  })
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

router.delete('/:id', function(req, res, next) {
  console.log(req.params.id);
  knex('snacks').del().where('id', req.params.id).then(function() {
    res.redirect('/snacks')
  })
})

module.exports = router
