const mongoose = require('mongoose');
const { Schema } = mongoose;

const userTestSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    question_bank: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        required: true
    },
    start_time: {
        type: Number,
        required: true
    },
    end_time: {
        type: Number,
    },
    score: {
        type: Number,
        default: 0,
        required: true
    },
    is_completed: {
        type: Boolean,
        default: false,
    },
    correct_questions: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    },
    wrong_questions: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});

const UserTests = mongoose.model('UserTests', userTestSchema);

module.exports = UserTests;
