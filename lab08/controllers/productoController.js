const model = require('../models/producto_model');

module.exports = {
    show: (req, res) => {
        model.find({}, (err, items) => {
            if (!err) {
                res.json(items);
            } else {
                return console.log(err);
            }
        });
    },
    detail: (req, res) => {
        let var_id = req.params.id;
        model.findOne({ _id: var_id }, (err, data) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.json(data);
            }
        });
    },
    create: (req, res) => {
        const newProduct = req.body;
        model.create(newProduct, (err, result) => {
            if (!err) {
                res.json(result);
            } else {
                return console.log(err);
            }
        });
    },
    update: (req, res) => {
        let val_id = req.body.id;
        let datos = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            precio: req.body.precio
        }
        model.updateOne({ _id: val_id }, datos, (err, newData) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(newData);
            }
        })


    },
    delete: (req, res) => {
        let val_id = req.params.id;
        model.deleteOne({ _id: val_id }, (err) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    }
}