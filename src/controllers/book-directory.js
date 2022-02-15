const { response } = require("express");
const usuario = require("../../../../gaston-api/src/models/usuario");
const Usuario = require("../models/book-directory");


const getDirectory = async (req, res = response) => {

    const _id = req.params.id;
    console.log(_id);

    try {
        const [usuario] = await Promise.all([
            Usuario.findById(_id)
        ]);

        console.log(usuario);


        res.status(200).json({
            ok: true,
            msg: "Todo bien",
            usuario
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            msg: "Todo mal"
        })
    }



}
const postDirectory = async (req, res = response) => {

    const body = req.body;
    try {

        const usuario = new Usuario(body);
        await usuario.save();

        res.status(200).json({
            ok: true,
            msg: "Todo bien",
            usuario
        })

    } catch (err) {
        res.status(500).json({
            ok: false,
            msg: "Todo mal",
            msg2: err,
            usuario
        })
    }



}
const putDirectory = async (req, res = response) => {
    const body = req.body
    console.log(body._id);
    try {
        const usuario = await Usuario.findByIdAndUpdate(body._id, 
                                                        {nombre : body.nombre, 
                                                         apellido : body.apellido}, { new: true });
        res.status(200).json({
            ok: true,
            msg: "Todo bien",
            usuario
        })
    } catch (error) {
        res.status(200).json({
            ok: true,
            msg: "Todo Mal",
            usuario
        })
    }
}
const deleteDirectory = async (req, res = response) => {
    const body = req.params.id;
    console.log(body);
    try {
        const usuario = await Usuario.findByIdAndRemove(body, { new: true });
        res.status(200).json({
            ok: true,
            msg: "Todo bien",
            usuario
        })
    } catch (error) {
        res.status(200).json({
            ok: true,
            msg: "Todo Mal",
            usuario
        })
    }
}


module.exports = {
    getDirectory,
    putDirectory,
    deleteDirectory,
    postDirectory
}