import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    rollNo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
    branch: {
        type: String,
        required: true,
        enum: ['CSE', 'ECE', 'Mechanical', 'Civil', 'Electrical'],
    },
    department: {
        type: String,
        required: true,
        enum: ['Engineering', 'Sciences', 'Management'],
    },
}, {
    timestamps: true,
})

const Student = model("student", StudentSchema);

export default Student;