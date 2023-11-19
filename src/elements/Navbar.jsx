import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/addpost'}>Add Post</Link></Button>
          <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/viewall'}>View All Post</Link></Button>
          <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/myprofile'}>My Profile</Link></Button>
          <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/logout'}>Log Out</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
