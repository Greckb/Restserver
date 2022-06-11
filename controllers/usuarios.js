const {response} = require('express')



const usuariosGet = (req, res = response) => {
    //Los querys son la info que llega en la url despues del ?
    const query = req.query;
    res.json({
        message: 'get APi - Controlador',
        query
    })
}

const usuarioPut = (req, res = response) => {  
    const {id} = req.params;
    res.json({
        message: 'put APi - Controlador',
        id
    })
}

const usuarioPost = (req, res = response) => {
    const body = req.body;
    res.json({
        message: 'post APi - Controlador',
        body
    })
}

const usuarioDelete = (req, res = response) => {
    res.json({
        message: 'delete APi - Controlador'
    })
}


module.exports = {
    usuariosGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete
}