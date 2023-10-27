import React from 'react'
import Login from './loginsignup/Login';
import Signup from './loginsignup/Signup'; 
import'./App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
 return (
   <div>
{/* <Login/>  
 <Signup/>      */}
<BrowserRouter>
<Routes>
 <Route path="/signup" element={<Signup/>}/> 
<Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter>
    </div> 
       );
    }

export default App ;