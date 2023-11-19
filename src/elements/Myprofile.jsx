import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import userImage from '../image/user.png'

const Myprofile = () => {
  

  const [cardData,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/user/getUser').then((res)=>{
      setData(...cardData,res.data);
      console.log(cardData.name);
    })
  },[])

  const removeHandler = (id)=>{
    //alert(id);
    console.log(id);
    axios.delete('http://localhost:4000/user/remove/'+id).then((res)=>{
      alert(res.data);
    })
  }

 

  return (
    <div style={{margin:'7%'}}>
      <Grid container spacing={2}>
        
        {cardData.map((val,i)=>(
        
        <Grid item key={i} xs={12} container  direction="row"  justifyContent="center"  alignItems="center" sx={{ marginTop:'3vh'}}>
      <Card sx={{ width: '30%' }}>
      <CardMedia justifyContent="center"  alignItems="center" direction="row"
        sx={{ height: 100, width:100, }}
        image={userImage}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{removeHandler(val._id)}}>Delete</Button>
        {/* <Button size="small" onClick={()=>{updateHandler(val.id)}}>Update</Button> */}
        <Button color="inherit"><Link style={{textDecoration:'none',color:'#1976d2'}} to={'/update'} element={val.id}>Update</Link></Button>
      </CardActions>
    </Card>
    </Grid>
      
      ))}
    </Grid>
    </div>
  )
}

export default Myprofile
