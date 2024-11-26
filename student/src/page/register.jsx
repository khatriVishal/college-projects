import React, { useState } from 'react';
import '../styles/register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [branch, setBranch] = useState('');
    const [department, setDepartment] = useState('');
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const registrationData = {
            name,
            rollNo,
            dob,
            password,
            branch,
            department
        };
        console.log(registrationData)
        const response = await axios.post('http://localhost:8000/student/register', registrationData);


        if (response.data.success) {
            alert('Registration successful');
            navigate('/login')
        } else {
            console.log("registeration failed")
        }

    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h2>Registration </h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name" >Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="rollNo" >Roll No</label>
                        <input
                            type="text"
                            id="rollNo"
                            name="rollNo"
                            placeholder="Enter your roll number"
                            onChange={(e) => setRollNo(e.target.value)}
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            onChange={(e) => setDob(e.target.value)}
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="branch">Branch</label>
                        <select id="branch" name="branch"
                            onChange={(e) => setBranch(e.target.value)}
                            required>
                            <option value="" disabled selected>
                                Select your branch
                            </option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Civil">Civil</option>
                            <option value="Electrical">Electrical</option>
                        </select>
                    </div>


                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select id="department" name="department"
                            onChange={(e) => setDepartment(e.target.value)}
                            required>
                            <option value="" disabled selected>
                                Select your department
                            </option>
                            <option value="Engineering">Engineering</option>
                            <option value="Sciences">Sciences</option>
                            <option value="Management">Management</option>
                        </select>
                    </div>


                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                    <div>
                        Already have an account ? <Link to={'/'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
