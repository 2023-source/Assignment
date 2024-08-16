import React,{useState, useContext} from 'react'
// import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
// import RegisterLogo from "../img/login.png";
// import userLogo from "../img/user.png"
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

// import "./Login.css"
const Register = () => {

  const [credentials, setCredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined
  })

  const {dispatch} = useContext(AuthContext)
//   console.log(dispatch)
  const navigate = useNavigate()
  
  const handleChange = (e)=>
  {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  }

  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try {
      
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
      })

      const result = await res.json()

      if (!res.ok) alert(result.message)

    //   console.log(result.data)
      dispatch ({type:'REGISTER_SUCCESS'})
      navigate('/Login')

    } catch (err) {
        alert(err.message)
      
    }
  }

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
           Username:- 
           <input type="text" id='username' onChange={handleChange}  placeholder="Enter username" required></input>
         </label>
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

export default Register;

