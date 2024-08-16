const Classroom = require('../models/Classroom');
const User = require('../models/User');

const createClassroom = async (req, res) => {
    const { name } = req.body;

    try
    {
        const classroom = await Classroom.create({ name });
        res.status(200).json({success:true, message:'Successfully Created', data: classroom})
    }

    catch {
        res.status(404).json({success:false, message:'not found. Try again'})
    }
};

const assignTeacher = async (req, res) => {
    const { teacherId } = req.body;
    const classroom = await Classroom.findById(req.params.id);

    if (classroom) {
        classroom.teacher = teacherId;
        await classroom.save();
        res.json(classroom);
    } else {
        res.status(404);
        throw new Error('Classroom not found');
    }
};

const assignStudent = async (req, res) => {
    const { studentId } = req.body;
    const classroom = await Classroom.findById(req.params.id);

    if (classroom) {
        classroom.students.push(studentId);
        await classroom.save();
        res.json(classroom);
    } else {
        res.status(404);
        throw new Error('Classroom not found');
    }
};

const createTimetable = async (req, res) => {
    const { timetable } = req.body;
    const classroom = await Classroom.findById(req.params.id);

    if (classroom) {
        classroom.timetable = timetable;
        await classroom.save();
        res.json(classroom);
    } else {
        res.status(404);
        throw new Error('Classroom not found');
    }
};

module.exports = { createClassroom, assignTeacher, assignStudent, createTimetable };
