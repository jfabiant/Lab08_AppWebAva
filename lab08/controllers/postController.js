const model = require('../models/post_model');

module.exports = {
    show: (req, res) => {
        model.find({}, (err, items) => {
            if (err) {
                console.log(err);
            } else {
                res.json(items);
            }
        });
    },
    create: (req, res) => {
        const { nombre, descripcion } = req.body;
        const newPost = {
            nombre,
            descripcion,
            created_at: new Date()
        }
        model.create(newPost, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        });
    },
    update: (req, res) => {
        const { id, nombre, descripcion } = req.body;
        const newPost = {
            nombre,
            descripcion
        }

        model.replaceOne({ _id: id }, newPost, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        });

    },
    delete: (req, res) => {
        const id = req.params.id;
        model.deleteOne({}, (err) => {
            if (err) {
                console.log(err);
            } else {
                res.json({message: 'Documento con id '+id+' fue eliminado satisfactoriamente'});
            }
        })
    }
}