import Student from "../models/Student";

export const allStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({ students });
};

export const getStudent = async (req, res) => {
  const id = req.params.id;
  const students = await Student.findById();
  res.status(200).json({ students });
};

export const createStudent = async (req, res) => {
  const { name, programme, indexNumber } = req.body;

  const student = await Student.create({ name, programme, indexNumber });
  res.status(201).json({ student });
};

export const updateStudent = async (req, res) => {
  const id = req.params.id;
  const students = await Student.findById();
  res.status(200).json({ students });
};

export const deleteStudent = async (req, res) => {
  const id = req.params.id;
  const students = await Student.findById();
  res.status(200).json({ students });
};
