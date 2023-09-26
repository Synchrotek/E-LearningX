import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Validation from './SignupLoginValidation';
import Navbar from '../../components/Navbar';
import './Login.css';

const Login = () => {


  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '', password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    // console.log(`${values.email} --:-- ${values.password}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.data === "Success")
            navigate('/')
          else alert("No record Found");
        })
        .catch(err => console.log(err));
    }
  };


  return (<>
    <Navbar />
    <div class="login">

      <form onSubmit={handleSubmit} class="login__form">
        <h1 class="login__title"><b>Login</b></h1>


        <div class="login__inputs">
          <div class="login__box">
            <input type="email" placeholder="Email ID" class="login__input"
              name='email'
              onChange={handleInput}
            />
            <i class="ri-mail-fill"></i>
          </div>
          {errors.email && <span className='text-danger'>{errors.email}</span>}

          <div class="login__box">
            <input type="password" placeholder="Password" class="login__input"
              name='password'
              onChange={handleInput}
            />
            <i class="ri-lock-2-fill"></i>
          </div>
          {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>

        <div class="login__check">
          <input type="checkbox" class="login__check-input" id="user-check" />
          <label for="user-check" class="login__check-label">Remember me</label>
        </div>

        <button type="submit" class="login__button">Login</button>

        <div class="login__register">
          Don't have an account? <a href="#">Register</a>
        </div>
      </form>
    </div>

  </>
  )
}

export default Login