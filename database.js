const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParameters = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect('mongodb://localhost/todo-app', connectionParameters)
        console.log('Connected to the database');
    } catch (error) {
        console.log("could not connect to the database " + error.message);
    }
}