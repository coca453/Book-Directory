const { response } = require("express");
const bookDirectory = require("../models/book-directory");


const getDirectory = async( req, res = response) =>{
    console.log("TEST");
    res.status(200).json({
        ok:true,
        msg: "Todo bien"
    })
}
const postDirectory = async( req, res = response) =>{
    
    const body = req.body.nombre;



    res.status(200).json({
        ok:true,
        msg: "Todo bien",
        body
    })
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