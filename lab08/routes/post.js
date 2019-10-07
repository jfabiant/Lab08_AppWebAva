const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController');

router.get('/list', (req, res) => {
    controller.show(req, res);
});
router.post('/create', function (req, res) {
    controller.create(req, res);
});
router.post('/update', function (req, res) {
    controller.update(req, res);
});
router.post('/remove/:id', function (req, res) {
    controller.delete(req, res);
});

module.exports = router;