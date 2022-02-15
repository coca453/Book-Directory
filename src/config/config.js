const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        console.log(process.env.DB_CNN);
        await mongoose.connect(
            process.env.DB_CNN, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log('DB Online');
    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de inicar la BD ver logs')
    }
}

module.exports = {
    dbConnection
}