const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    name: {
      type: String,
      required: [true, "Please provide the student name"],
    },
    Programme: {
      type: String,
      required: [true, "Please provide the student's programme of study"],
    },
    indexNumber: {
      type: Number,
      required: [true, "Please provide student index number"],
    },
  },{
    timestamps: true,
});
module.exports = model("Student", studentSchema);