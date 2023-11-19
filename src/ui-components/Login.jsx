import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [user,setUser]= useState();
    const navigate = useNavigate();
    const inputHandler= (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const addHandler=()=>{
        console.log(user);
        axios.post('http://127.0.0.1:4000/user/login',user).then((res)=>{
          alert(res.data.message);
      if(res.data.message=='success')
      {
        sessionStorage.setItem("userToken",res.data.token);
        navigate("/viewall")
      }
    })
    }


    

  return (
   
    <div className='App' style={{marginTop:'10%'}}>
      <Typography variant='h3' style={{color:"purple"}}>
        BlogApp Login
      </Typography>
      <br/> <br/>
      <TextField variant='outlined' label="username" name='email' onChange={inputHandler}/>
      <br/> <br/>
      <TextField variant='outlined' type='password' label="password" name='password' onChange={inputHandler}/>
      <br/> <br/>
      <Button variant='contained' color='secondary' onClick={addHandler}>Login</Button>
    <br /><br /><br />
    <Typography>
        <Link to={'/sign'}>New users click here</Link>
    </Typography>
    </div>
  )
}

export default Login
