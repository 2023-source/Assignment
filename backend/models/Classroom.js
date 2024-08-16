const mongoose = require('mongoose');

const classroomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    timetable: {
        type: String,
    },
}, {
    timestamps: true,
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
