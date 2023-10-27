import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
  

function Signup() {
    const [email,setEmail]=useState("");
     const navigate=useNavigate()
    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }
    const [ConfirmEmail,setConfirmEmail]=useState("");
    const handleConfirmEmail=(event)=>{
    setConfirmEmail(event.target.value);
}
    const [password,setPassword]=useState("");
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleClick=(event)=>{
      
        event.preventDefault();
        navigate("/login");
        // console.log(event);
    }
  return (
    <div className='Signup'>
        <div className='sign'>
        <h1 className='s'><u>SIGNUP</u></h1>
        <h2 className='em'>Email</h2>
        <input type="email" placeholder='enter email' onChange={handleEmail} value={email}/>
        <h2 className='em'> ConfirmEmail</h2>
        <input type="email" placeholder='enter email' onChange={handleConfirmEmail} value={ConfirmEmail}/>
        <h2 className='p'>Password</h2>
        <input type="password" placeholder='enter password'onChange={handlePassword} value={password}/>
        <br />
        <br />
        <br />
        <button onClick={handleClick}>signup</button>
        </div>

    </div>
  )
  }

export default Signup;