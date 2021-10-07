const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: 'Get API - Controlador',
        query,
    });
};

const usuariosPut = (req, res) => {
    const { id } = req.params;
    res.status(400).json({
        msg: 'Put API - Controlador',
        id,
    });
};

const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'Post API - Controlador',
        nombre,
        edad,
        id,
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete API - Controlador',
    });
};

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'Patch API - Controlador',
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
};
