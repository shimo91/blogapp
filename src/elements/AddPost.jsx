import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axiosInstance from '../ui-components/axiosinterceptor';

const AddPost = (props) => {
  const [form,setPost] = useState({
    title:props.data?props.data.title:'',
    post:props.data?props.data.post:'',
    imageUrl:props.data?props.data.imageUrl:'',
    dateUpdate:Date.now()
  });
  const inputHandler=(e)=>{
    setPost({...form,[e.target.name]:e.target.value});
   
  } 
  const addHandler = ()=>{
    if(props.method==="put"){
      console.log("id is :"+props.data._id)
      axiosInstance.put("http://54.159.167.39:4000/blogs/update/"+props.data._id,form)
      .then((response)=>{
       
        if (response.data==="Updated successfully") {
         alert(response.data)
          window.location.reload(false);
    
          
        } else {
          alert("not updated")
        }
      })
    }
    else
    {
      //console.log(post);
      axiosInstance.post('http://54.159.167.39:4000/blogs/addPost',form).then((res)=>{
        alert(res.data);
      })
    }
    
  }
  
  return (
    <div style={{margin:'4%'}}>
      
      <TextField  id="outlined-basic" label='Post title' fullWidth name='title' value={form.title} onChange={inputHandler}/>
      <br /><br />
      <TextField id="outlined-basic" label='Type a post' multiline rows={10} fullWidth name='post' value={form.post} onChange={inputHandler} />
        <br /><br />
        <TextField fullWidth id="outlined-basic" label='Image URL' onChange={inputHandler} name='imageUrl' value={form.imageUrl} />
        <br /><br />
        <Button variant='outlined' color='secondary' onClick={addHandler} >Submit</Button>
    </div>
  )
  
}

export default AddPost


