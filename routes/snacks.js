var express = require('express')
var router = express.Router()
const knex = require('../db/knex')


router.get('/', function(req, res, next) {
  knex('snacks').then(function (allSnacks) {
    res.render('index', {allSnacks})
  })
})

module.exports = router
