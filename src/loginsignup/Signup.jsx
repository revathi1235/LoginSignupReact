import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

function Login() {
    
    const navigate=useNavigate()    
    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }

    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleClick=(event)=>{
       
        event.preventDefault()
        console.log(event);
        navigate("/signup");
    }
    const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
  return (
    <div className='login'>
        <div className='log'>
        <h1 className='l'><u>LOGIN</u></h1>
        <h2 className='e'>Email</h2>
        <input type="email" placeholder='enter email' onChange={handleEmail} value={email}/>
        <h2 className='p'>Password</h2>
        <input type="password" placeholder='enter password'onChange={handlePassword} value={password}/>
        <br />
        <br />
        <br />
        <button onClick={handleClick}>Login</button>
        </div>

    </div>
  );
}

export default Login