const Producto = require("../models/producto.model.js");

let response = {
  msg: "",
  exito: false,
};
exports.create = function (req, res) {
  let producto = new Producto({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
    referencia: req.body.referencia,
    genero: req.body.genero,
    lote: req.body.lote,
    precio: req.body.precio,
  });
  producto.save(function (err) {
    if (err) {
      (console.log = false),
        (response.exito = false),
        (response.msg = "Error al guardar el producto!"),
        res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El producto se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Producto.find(function (err, productos) {
    res.json(productos);
  });
};

exports.findOne = function (req, res) {
  Producto.findOne({ _id: req.params.id }, function (err, productos) {
    res.json(productos);
  });
};

exports.update = function (req, res) {
  let producto = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
    referencia: req.body.referencia,
    genero: req.body.genero,
    lote: req.body.lote,
    precio: req.body.precio,
  };
  Producto.findByIdAndUpdate(req.params.id, { $set: producto }, function (err) {
    if (err) {
      (console.error = err),
        (response.exito = false),
        (response.msg = "Error al modificar el producto!"),
        res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El producto se modificó correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Producto.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      (console.error = err),
        (response.exito = false),
        (response.msg = "Error al eliminar el producto!"),
        res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El producto se eliminó correctamente");
    res.json(response);
  });
};
