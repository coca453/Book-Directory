const { response } = require("express");
const usuario = require("../models/book-directory");


const getDirectory = async( req, res = response) =>{
    console.log("TEST");
    res.status(200).json({
        ok:true,
        msg: "Todo bien"
    })
}
const postDirectory = async( req, res = response) =>{
    
    const usuario  = req.body;
    try{
        res.status(200).json({
            ok:true,
            msg: "Todo bien",
            usuario
        })

    } catch(err) {
        res.status(500).json({
            ok: false,
            msg: "Todo mal",
            msg2: err,
            usuario
        })
    }



}
const putDirectory = async( req, res = response) =>{
    console.log("TEST");
    res.status(200).json({
        ok:true,
        msg: "Todo bien"
    })
}
const deleteDirectory = async( req, res = response) =>{
    console.log("TEST");
    res.status(200).json({
        ok:true,
        msg: "Todo bien"
    })
}


module.exports = {
    getDirectory,
    putDirectory,
    deleteDirectory,
    postDirectory
}