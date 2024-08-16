import React, { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const Login = () =>
  {
  const [credentials, setCredentials] = useState({
    email:undefined,
    password:undefined
  })

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e)=>
    {
      setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try {

        const res = await fetch(`${BASE_URL}/auth/login`,{
        method:"post",
        headers:{
          "content-type":"application/json",
        },
        credentials:'include',
        body: JSON.stringify(credentials),
      })

      const result = await res.json()
      if (!res.ok) alert(result.message)

      console.log(result.data)
      dispatch ({type:'LOGIN_SUCCESS', payload:result.data})
      navigate('/principal')
      
    } catch (error) {
      dispatch({type:'LOGIN_FAILURE', payload: error.message })
      
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
               <input type="email" id='email' onChange={handleChange}  placeholder="Enter email" required></input>
             </label>
            </div>
            <div style={{paddingBottom:"10px"}}>
            <label style={{fontSize:"20px"}}>
              Password:- 
              <input type="password" id='password' onChange={handleChange}  placeholder="Enter password" required></input>
            </label>
            </div>

            <button type="submit" style={{fontSize:"20px"}}>Login</button>
           
          </div>
             
         </form>
        </>
    )
}

export default Login;