const router = require('express').Router();
const controller = require('./tables.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router
.route('/')
.get(controller.list)
.post(controller.create)
.all(methodNotAllowed);

router
.route('/:table_id/seat')
.get(controller.read)
.put(controller.seat)
.delete(controller.finish)
.all(methodNotAllowed);

module.exports = router;