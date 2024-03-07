

const{response, request} = require('express');

const usuariosGet = (req = request, res = response) =>{
    const {q, nombre='no name', apikey='1',page=1, limit=10} = req.query;
    res.json({
        //ok: true, es opcional
        msg:'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit

    });
}

const usuariosPost = (req, res = response) =>{

    const {nombre, edad} = req.body;
    res.json({
        //ok: true, es opcional
        msg:'Post API - Controlador',
        nombre,
        edad
    });
}
const usuariosPut = (req, res = response) =>{

    const id = req.params.id;
    res.json({
        //ok: true, es opcional
        msg:'put API - Controlador',
        id
    });
}
const usuariosPatch = (req, res = response) =>{
    res.json({
        //ok: true, es opcional
        msg:'patch API - Controlador'
    });
}
const usuariosDelete = (req, res = response) =>{
    res.json({
        //ok: true, es opcional
        msg:'delete API - Controlador'
    });
}


module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}