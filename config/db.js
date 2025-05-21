const mongoose = require("mongoose");

const connectDB = async () => {
    console.log('MONGODB_URI:', process.env.MONGODB_URI);
    try {
       await  mongoose.connect(process.env.MONGODB_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectDB;