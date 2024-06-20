const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    console.log('Establishing DataBase connection');
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log('Connected to DataBase');
    } catch (error) {
        console.log('Not connected to DataBase' + error.message);
    }
}

module.exports = connectToMongoDB;