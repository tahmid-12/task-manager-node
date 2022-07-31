const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter a Name"],
        trim: true,
        maxlength: [20, "Character length must be less then 20"],
    },
    completed:  {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Task', TaskSchema); 