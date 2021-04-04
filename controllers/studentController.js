const Student = require("../models/Student");

const allStudents = async(req,res) =>{
   const students = await Student.find();
   res.status(200).json({students});
};

const getStudent = async(req,res) => {
   res.send('Get a student');
};

const createStudent = async(req,res) =>{
    res.send('Create Student');
};

const updateStudent = async(req,res) =>{
    res.send('Update Student');
};

const deleteStudent =async (req,res) =>{
    res.send('Delete Stutent');
};

module.exports = {
    allStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
}

