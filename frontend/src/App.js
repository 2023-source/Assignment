import logo from './logo.svg';
import Login from "./components/login";
import Principal from "./components/principal";
import Student from "./components/student";
import Teacher from "./components/teacher";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Register from './components/account';

function App() {
  return (
    <>
     <div>
       <Router>
        <ul>
          <li><Link to={"/login"}>Login</Link></li>          
          <li><Link to={"/register"}>Register</Link></li>
          <li><Link to={"/principal"}>Principal</Link></li>
          <li><Link to={"/teacher"}>Teacher</Link></li>
          <li><Link to={"/student"}>Student</Link></li>
        </ul>
        <Routes>
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/principal" element={<Principal />} />
           <Route path="/teacher" element={<Teacher />} />
           <Route path="/student" element={<Student />} />
        </Routes> 
       </Router>
    
     </div>
    </>
  );
}

export default App;
