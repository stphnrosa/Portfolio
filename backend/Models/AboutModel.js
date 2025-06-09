import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema ({
    title:{type: String, required: true, trim: true},
    body: {type: String}
})
