import React,{useState} from "react";
import "./Register.css";
import {useNavigate} from "react-router-dom";

function Register(){

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const navigate=useNavigate();

const handleRegister=()=>{

if(
name.trim()===""||
email.trim()===""||
password.trim()===""
){

alert("Please fill all fields");

return;

}

localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("🎉 Registration Successful");

navigate("/login");

};

return(

<div className="register-container">

<div className="register-box">

<h1>🍔 Register</h1>

<input
type="text"
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleRegister}>
Register
</button>

<p>
Already have account?<span onClick={()=>navigate("/login")}
                            style={{
                            color:"blue",
                            cursor:"pointer",
                            fontWeight:"bold"
                            }}
                            >  Login</span>

</p>

</div>

</div>

);

}

export default Register;