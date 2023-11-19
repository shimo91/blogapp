import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosInstance from '../ui-components/axiosinterceptor';
import AddPost from './AddPost';


const Viewall = () => {
  
  var[update,setUpdate] = useState(false);
  var[singleValue,setSingleValue]=useState([]);

  const [cardData,setData]=useState([]);
  useEffect(()=>{
    axiosInstance.get('http://54.159.167.39:4000/blogs/getPost').then((res)=>{
      setData(...cardData,res.data);
      console.log(cardData);
    })
  },[])

  const removeHandler = (id)=>{
    //alert(id);
    console.log(id);
    axiosInstance.delete('http://54.159.167.39:4000/blogs/remove/'+id).then((res)=>{
      alert(res.data);
    })
  }

  const updateHandler = (val)=>{
    console.log("update clicked",val);
    setUpdate(true);
    setSingleValue(val)
  }

  let finalJSX=(
    <div style={{margin:'7%'}}>
      <Grid container spacing={2}>
        
        {cardData.map((val,i)=>(
        
        <Grid item key={i} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.imageUrl}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.post}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{removeHandler(val._id)}}>Delete</Button>
        <Button size="small" onClick={()=>{updateHandler(val)}}>Update</Button>
      </CardActions>
    </Card>
    </Grid>
      
      ))}
    </Grid>
    </div>
  )
  if(update) finalJSX=<AddPost method="put" data={singleValue}/>
  return (
   
     
      finalJSX
      
    
     )
       
   };
   

export default Viewall
