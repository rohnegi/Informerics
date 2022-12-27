import React from 'react'
import {Container,Grid,Card,CardContent,CardActions,Typography,Button,Box,TextField,CardMedia} from '@mui/material'
import '../Components/Login.css';
import InfomericsLogo from '../Images/Infomerics-logo.jpg'
import ConceptLogo from '../Images/4iConcept.jpg'
import StarsLogo from '../Images/Stars.jpg'

export default function Login() {
 
  return (
    <div className='Image'>
    <Container sx={{paddingLeft: '0px'}} >
    <Grid container sx={{paddingLeft: '0px'}}>
    <Grid item md={6}>
    <Container sx={{ background:null,paddingBottom: 15}}>
    <Box sx={{paddingTop:5, paddingLeft: 4}} >
      <img src={ConceptLogo} alt='logo' width={'300vw'} height={'80vh'}/>
    </Box>
    <Box sx={{paddingTop:20, paddingLeft: '0px'}}>
    <img src={StarsLogo} alt='logo' width={'400vw'} height={'100vh'} paddingLeft={0}/>
    </Box>
    </Container>
    </Grid>
    <Grid item md={6}>
    <Container sx={{ alignItems:'center', background:null, paddingLeft:20 ,paddingBottom: 15}}>
    <Box sx={{paddingTop:5, paddingLeft: 15}}>
     <img src={InfomericsLogo} alt='logo' width={'300vw'} height={'80vh'}/>
    </Box>
    <Box sx={{padding: 10}}>  
    <Card sx={{ maxWidth: 400, background:'white' }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Welcome to Infomerics Rating
        </Typography>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {m:1, width:'25ch'},
      }}
      noValidate
      autoComplete="off"
    >  <div>
    <TextField
      label="UserID"
      id="outlined-size-small"
      placeholder='Enter UserID'
      size="small"
    />
     <TextField
      label="Password"
      id="outlined-size-small"
      placeholder='Enter Password'
      size="small"
    />
  </div>
  </Box>
      </CardContent>
      <Box sx={{
        display: 'flex',
        justifyContent:'flex-end',
        paddingRight: 5
      }}>
      <CardActions>
      <Button variant="contained">Log In</Button>
      </CardActions>
      </Box>
    </Card>
    </Box>
    </Container>
    </Grid>  
    </Grid>
    </Container> 
  </div>   
  )
}

