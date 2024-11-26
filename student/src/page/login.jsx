import React, { useState } from 'react';
import '../styles/login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const backend_url = "https://college-projects-1.onrender.com";
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [rollNo, setRollNo] = useState('');
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginData = {
            rollNo,
            password,
        };
        const response = await axios.post(`${backend_url}/login`, loginData);

        if (response.data.success) {
            console.log('Logged in student:', response.data);
            alert("login successfull");
            navigate('/dashboard', {
                state: {
                    student: response.data.student
                }
            });
        } else {
            console.log("login failed")
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Roll No</label>
                        <input type="text" placeholder="Enter your roll no"
                            onChange={(e) => setRollNo(e.target.value)}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}

                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <div>
                        Don't have an account ? <Link to={'/register'}>Register</Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default LoginPage;
