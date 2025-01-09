const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/gym-clothing-store-db-dev',
        );
        console.log('Connect successfully!!!');
    } catch (err) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
