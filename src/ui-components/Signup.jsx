import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [user,setUser] = useState({
    name:'',
    email:'',
    address:'',
    phone:'',
    dateUpdate:Date.now()
  });
  const inputHandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
   
  } 
  const addHandler = ()=>{
    console.log(user);
    axios.post('http://localhost:4000/user/addUser',user).then((res)=>{
      alert(res.data);
    })
  }

  return (
    <div style={{margin:'10%'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' fullWidth label='Name' name='name' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' fullWidth label='Email' name='email' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' fullWidth label='Address' name='address' multiline rows={4} onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' fullWidth label='Phone' name='phone' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' fullWidth label='Password' name='password' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Button variant='outlined' onClick={addHandler} exact="true" >Submit</Button>
        </Grid>
        <br/><br/><br/>
        <Grid item xs={12} sm={6} md={6}>
            <Typography>
                <Link to={"/"}>Back to Login</Link>
            </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Signup
