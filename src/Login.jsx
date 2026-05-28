import React,{useState} from "react";
import "./Login.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "./authSlice";

function Login(){

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const navigate=useNavigate();

const dispatch=useDispatch();

const handleLogin=()=>{

const savedEmail=
localStorage.getItem("email");

const savedPassword=
localStorage.getItem("password");

if(
email!==savedEmail ||
password!==savedPassword
){

alert(
"❌ Invalid Details. Register First"
);

return;

}

dispatch(

login({

email:email

})

);

alert(
"🎉 Login Successful"
);

navigate("/cart");

};

return(

<div className="login-container">

<div className="login-box">

<h1>🍔 Login</h1>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>
setEmail(e.target.value)
}
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>
setPassword(e.target.value)
}
/>

<button
onClick={handleLogin}
>

Login

</button>

<p>

Don't have account?

<span
onClick={()=>
navigate("/register")
}
style={{
color:"blue",
cursor:"pointer",
fontWeight:"bold"
}}
>

 Register

</span>

</p>

</div>

</div>

);

}

export default Login;