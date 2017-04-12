var express = require('express')
var router = express.Router()
const knex = require('../db/knex')


router.get('/', function(req, res, next) {
  knex('snacks').then(function (allSnacks) {
    res.render('index', {allSnacks})
  })
})

router.get('/:id', function (req, res, next) {
  var id = req.params.id
  knex('snacks').where({ id }).then(function (oneSnack) {
    console.log(oneSnack);
    res.render('view-one', {oneSnack})
  })
})

module.exports = router
