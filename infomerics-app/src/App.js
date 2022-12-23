import React from 'react'
import {Container,Grid,Card,CardContent,CardActions,Typography,Button,Box,TextField,CardMedia} from '@mui/material'
import './App.css';
import InfomericsLogo from './Images/Infomerics-logo.jpg'
import ConceptLogo from './Images/4iConcept.jpg'

export default function App() {
 
  return (
    <div className='Image'>
    <Container >
    <Grid container>
    <Grid item md={6}>
    <Container sx={{ alignItems:'center', background:null, paddingLeft:5 ,paddingBottom: 15}}>
    <Box sx={{paddingTop:5, paddingLeft: 4,}}>
      <img src={ConceptLogo} alt='logo' width={'300vw'} height={'80vh'}/>
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
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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

