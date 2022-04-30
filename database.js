const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParameters = {
            useNewUrlParser: true,
        };
        await mongoose.connect('mongodb://localhost:27017/todo-app', connectionParameters)
        console.log('Connected to the database');
    } catch (error) {
        console.log("could not connect to the database " + error.message);
    }
}