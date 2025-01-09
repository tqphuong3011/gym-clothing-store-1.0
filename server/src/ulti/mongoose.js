module.exports = {
    multipleMongooseToObject: (mongooseArrays) => {
        return mongooseArrays.map((mongoose) => mongoose.toObject());
    },
    singleMongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
