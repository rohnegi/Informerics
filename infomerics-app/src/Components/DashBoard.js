import React from "react";
import '../Components/DashBoard.css'
import { Container, Grid, Card, CardContent, CardActions, Typography, Button, Box, TextField, Stack, Paper, Divider } from '@mui/material'
import { styled } from '@mui/material/styles';
import ConceptLogo from '../Images/4iConcept.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AppsIcon from '@mui/icons-material/Apps';



export default function DashBoard() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        alignItems: 'center',
        color: theme.palette.text.secondary,
    }));
    const [alignment, setAlignment] = React.useState('dashboard');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <div className='Image'>
            <Grid container sx={{paddingTop:'10px'}}>
                <Grid item md={2}>
                    <Paper sx={{marginLeft: '10px'}}>
                        <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} sx={{ width: '15vw' }}>
                            <Item>  <Box sx={{alignItems:'center' }}>
                                <img src={ConceptLogo} alt='logo' width={'180vw'} height={'40vh'}   />
                            </Box>
                            </Item>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                orientation="vertical"
                                sx={{ margin: '10px' }}
                            >
                                <ToggleButton value="dashboard"><DashboardIcon/>DashBoard</ToggleButton>
                                <ToggleButton value="companyprofile">Company Profile</ToggleButton>
                                <ToggleButton value="companyonboarding">Company Onboarding</ToggleButton>
                                <ToggleButton value="interaction"><AppsIcon/>Interaction</ToggleButton>
                                <ToggleButton value="ratingcommittee"><ContentPasteIcon/>Rating Committee</ToggleButton>
                                <ToggleButton value="inbox"><ContentPasteIcon/>Inbox </ToggleButton>
                                <ToggleButton value="admin">Admin</ToggleButton>
                            </ToggleButtonGroup>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item md={10}>
                    <Container >
                    </Container>
                    <h1>knbdfbgfghsd</h1>
                    <h1> nifeuiogherhio</h1>
                </Grid>
            </Grid>

        </div>
    )
}
