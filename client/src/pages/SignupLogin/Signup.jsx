import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from './SignupLoginValidation';
import Navbar from '../../components/Navbar';
import './Signup.css'

const Signup = () => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '', phNo: '', email: '',
        password: '', c_password: ''
    });

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
        // console.log(`${values.email} --:-- ${values.password}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if (errors.name === "" && errors.email === "" && errors.email === ""
            && errors.password === "" && errors.c_password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    console.log(res);
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    };

    return (<>
        <Navbar />
        <main>
            <section className="learn">
                <h1>Let's Join you<br />To our community</h1>
                <p>See how experienced developers solve problems in real-time. <br /> Watching scripted tutorials is great, but understanding how <br /> developers think is invaluable.</p>
            </section>

            <section>
                <div className="sign-up">
                    <form onSubmit={handleSubmit}
                        className="signup-form">
                        <div className="form-btn">
                            <input type="text" placeholder="Your Name"
                                name='name' onChange={handleInput}
                            />
                            <img className="icon" src="./Images/icon-error.svg" alt="Error" />
                            {errors.name && <span className='text-danger'>{errors.name}</span>}
                        </div>

                        <div className="form-btn">
                            <input type="text" placeholder="Contact No."
                                name='phNo' className='form-control'
                                onChange={handleInput}
                            />
                            <img className="icon" src="./Images/icon-error.svg" alt="Error" />
                            {errors.phNo && <span className='text-danger'>{errors.phNo}</span>}
                        </div>

                        <div className="form-btn">
                            <input type="email" placeholder="Email Address"
                                name='email' className='form-control'
                                onChange={handleInput}
                            />
                            <img className="icon" src="./Images/icon-error.svg" alt="Error" />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>

                        <div className="form-btn">
                            <input type="password" placeholder="Password"
                                name='password' className='form-control'
                                onChange={handleInput}
                            />
                            <img className="icon" src="./Images/icon-error.svg" alt="Error" />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>

                        <div className="form-btn">
                            <input type="password" placeholder="Confirm Password"
                                name='c_password' className='form-control'
                                onChange={handleInput}
                            />
                            <img className="icon" src="./Images/icon-error.svg" alt="Error" />
                            {errors.c_password && <span className='text-danger'>{errors.c_password}</span>}
                        </div>

                        <button id="submit-btn">Register</button>

                    </form>
                </div>
            </section>
        </main>
    </>
    )
}

export default Signup