const express = require('express')
const router = require('express').Router()
const controllers = require('../controllers/controllers')
router.get('/api', controllers.select)
router.get('/:id', controllers.selectById)


module.exports = router