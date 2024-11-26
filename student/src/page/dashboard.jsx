import React from 'react';
import '../styles/dashboard.css';
import Image from "../assets/image.png"
import { useLocation } from 'react-router-dom';
const StudentCard = () => {
    const location = useLocation();

    // Destructure the user data from the state
    const { student } = location.state || {};
    console.log(student);
    const { name, rollNo, branch, department } = student;
    return (
        <div className="student-card">
            <div className="student-header">
                <img
                    src={`${Image}`}
                    alt="Student Avatar"
                    className="student-avatar"
                />
                <h2 className="student-name">{name}</h2>
                <p className="student-roll">Roll No: {rollNo}</p>
            </div>
            <div className="student-body">

                <p><strong>Branch:</strong> {branch}</p>
                <p><strong>Department:</strong> {department}</p>
            </div>

        </div>
    );
};

export default StudentCard;
