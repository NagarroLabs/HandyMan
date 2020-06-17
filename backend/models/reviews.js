const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    ratingScore: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    jobCompleted: {
        type: Boolean,
        required: true
    },
    jobCompletedOnTime: {
        type: Boolean,
        required: true
    },
    commentReview: String,
    handyManId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'HandyMan'
    }
});

module.exports = mongoose.model('Review', reviewSchema);
