import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios'

const AddPost = () => {
  const [post,setPost] = useState({
    title:'',
    post:'',
    imageUrl:'',
    dateUpdate:Date.now()
  });
  const inputHandler=(e)=>{
    setPost({...post,[e.target.name]:e.target.value});
   
  } 
  const addHandler = ()=>{
    console.log(post);
    axios.post('http://localhost:4000/blogs/addPost',post).then((res)=>{
      alert(res.data);
    })
  }
  return (
    <div style={{margin:'4%'}}>
      <TextField  variant='outlined' label="post title" fullWidth name='title' onChange={inputHandler}/>
      <br /><br />
      <TextField variant='outlined' label="Type a post" multiline rows={10} fullWidth name='post' onChange={inputHandler} />
        <br /><br />
        <TextField label='Image URL' fullWidth variant='outlined' onChange={inputHandler} name='imageUrl' />
        <br /><br />
        <Button variant='outlined' color='secondary' onClick={addHandler} >Submit</Button>
    </div>
  )
}

export default AddPost


