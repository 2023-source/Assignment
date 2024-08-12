import React, { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
// import axios from "../axiosConfig";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setUser(data);
      if (data.role === 'Principal') {
        navigate('/principal');
      } else if (data.role === 'Teacher') {
        navigate('/teacher');
      } else if (data.role === 'Student') {
        navigate('/student');
      }
    } catch (error) {
      console.log(error)
      console.error('Invalid login credentials');
    }
  };

  return(
        <>
         <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"center"}} >
          <div >
            <div>
             <h1>
                 Login Form
             </h1>
            </div>

            <div style={{paddingBottom:"10px"}}>
             <label style={{fontSize:"20px"}}>
               Email:- 
               <input type="email" onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email" required></input>
             </label>
            </div>
            <div style={{paddingBottom:"10px"}}>
            <label style={{fontSize:"20px"}}>
              Password:- 
              <input type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Enter password" required></input>
            </label>
            </div>

            <button type="submit" style={{fontSize:"20px"}}>Login</button>
           
          </div>
             
         </form>
        </>
    )
}

export default Login;