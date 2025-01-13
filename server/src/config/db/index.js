const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(
            'mongodb://localhost:27017/gym-clothing-store-db-dev',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );
        console.log('Connect MongoDB successfully!!!');
    } catch (err) {
        console.log('Connect MongoDB failure!!!');
    }
}

module.exports = { connect };
