const { Schema, model } = require("mongoose");



const bookDirectorySchema = Schema({
    nombre: {
        type: String
    },
    Apellido: {
        type: String
    }
})

bookDirectorySchema.method('toJson', () =>{
    const{ _id, ...Object} = this.Object();
    Object.uid = _id;
    return Object
})

module.exports = model("bookDirectory", bookDirectorySchema)