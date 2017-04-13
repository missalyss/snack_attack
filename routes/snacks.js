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

router.get('/:id/edit', function (req, res, next) {
  knex('snacks').where('id', req.params.id).then(function(thisSnack) {
    res.render('edit', {thisSnack})
  })
})

router.get('/:id/delete', function(req, res, next) {
  var id = req.params.id
  knex('snacks').where('id', req.params.id).then(function (snack) {
    res.render('delete', {snack})
  })
})

router.get('/:id', function (req, res, next) {
  var id = req.params.id
  knex('snacks').where({ id }).then(function (oneSnack) {
    res.render('view-one', {oneSnack})
  })
})

router.post('/', function (req, res, next) {
  var snack = {
    name, img_url, rating, review
  } = req.body
  if (!name) {
    var error = 'Your snack needs a name, yo!'
    res.render('new', {error})
  } else {
    knex('snacks').insert(snack).then(function() {
      res.redirect('/snacks')
    })
  }
})

router.put('/:id', function (req, res, next) {
  var id = req.params.id
  var snack = {
    name, img_url, rating, review
  } = req.body
  if (!name) {
    var error = 'Why would you get rid of the name? Go back and put it back!'
    res.render('edit', {error})
  } else {
    knex('snacks').where('id', id).update(snack).then(function() {
      res.redirect('/snacks')
    })
  }
})

router.delete('/:id', function(req, res, next) {
  knex('snacks').del().where('id', req.params.id).then(function() {
    res.redirect('/snacks')
  })
})

module.exports = router
