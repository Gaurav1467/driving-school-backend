const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question_data: {
        type: String,
        required: true
    },
    question_type: {
        type: String,
        required: true
    },
    answer_key: {
        type: String,
        required: true
    },
    option_one: {
        type: String,
        required: true
    },
    option_two: {
        type: String,
        required: true
    },
    option_three: {
        type: String,
        required: true
    },
    option_four: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model('questions', questionSchema);

module.exports = Question;