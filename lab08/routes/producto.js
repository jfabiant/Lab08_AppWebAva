const express = require('express');
const router = express.Router();
const controller = require('../controllers/productoController');

router.get('/', function (req, res) {
    controller.show(req, res);
});

router.post('/', function (req, res) {
    controller.create(req, res);
});

router.get('/show/:id', (req, res) => {
    controller.detail(req, res);
});

router.post('/update', function (req, res) {
    controller.update(req, res);
});

router.post('/delete/:id', function (req, res) {
    controller.delete(req, res);
});

module.exports = router;