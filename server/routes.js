
import express from 'express';
import Student from './model.js';
;
const router = express.Router();
router.post('/register', async (req, res, next) => {
    try {
        const { name, rollNo, dob, password, branch, department } = req.body;


        const existingStudent = await Student.findOne({ rollNo });
        if (existingStudent) {
            return res.status(400).json({
                message: "Roll number already exists",
                success: false,
            });
        }


        const newStudent = await Student.create({
            name,
            rollNo,
            dob,
            password,
            branch,
            department,
        });

        if (!newStudent) {
            return next(new ErrorHandler("Failed to register the student"));
        }

        return res.status(200).json({
            message: "Student successfully registered",
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while registering the student",
            success: false,
            error: error.message,
        });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { rollNo, password } = req.body;


        const student = await Student.findOne({ rollNo });
        if (!student) {
            return res.status(404).json({
                message: "Student is not registered",
                success: false,
            });
        }
        if (password != student.password) {
            return res.status(404).json({
                message: "Invalid  password ",
                success: false,
            });
        }



        return res.status(200).json({
            message: "Login successful",
            success: true,
            student: {
                rollNo: student.rollNo,
                name: student.name,
                branch: student.branch,
                department: student.department,
            },
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error logging in",
            success: false,
            error: error.message,
        });
    }
});

export default router;