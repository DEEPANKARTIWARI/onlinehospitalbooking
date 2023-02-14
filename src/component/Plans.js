import React, { useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import '../component/Plans.css'

function Plans() {

    const [bookSlot, setBookSlot] = useState([
        {
            img:'https://newassets.apollo247.com/organs/ic_blood.png',
            test:'Blood test',
            drName:'Prem Jadhav',
            mrp:'320',
            actMrp:'180',
            slots:'4'
        },
        {
            img:'https://newassets.apollo247.com/organs/ic_thyroid.png',
            test:'Tyroid',
            drName:'Suhail Ahamed',
            mrp:'435',
            actMrp:'370',
            slots:'6'
        },
        {
            img:'https://newassets.apollo247.com/organs/ic_kidney.png',
            test:'Complete Urine Examination',
            drName:'Mani',
            mrp:'524',
            actMrp:'420',
            slots:'7'
        },
        {
            img:'https://newassets.apollo247.com/cms/2021-05/heart.png',
            test:'blood Pressure',
            drName:'Sheetal Bagal',
            mrp:'199',
            actMrp:'109',
            slots:'3'
        },
        {
            img:'https://newassets.apollo247.com/cms/2021-07/Full%20body.png',
            test:'Full Body Checkup',
            drName:'Suhail Ahamed',
            mrp:'1435',
            actMrp:'1370',
            slots:'6'
        },
        {
            img:'https://newassets.apollo247.com/cms/2021-05/pregnancy.png',
            test:'Pregnancy Test',
            drName:'Mounika',
            mrp:'599',
            actMrp:'449',
            slots:'5'
        }
    ])
    console.log(bookSlot);

    return (
        <Container gutterBottom >
            <Box className= 'bx-1'>
                <Grid container spacing={2}>
                    {bookSlot.map((e)=>{
                        return(
                            <Grid item lg={4}>
                    <Card >
                        <CardContent>
                            <div className='cb1'>
                                <img src={e.img} alt='blood-test' />
                            </div>
                            <Typography variant='h5' component="div" gutterBottom>
                                {e.test}
                            </Typography>
                            <div className='cb2'>
                                <div>
                                    <Typography variant='h6' gutterBottom color='text.secondary'>
                                        Dr. {e.drName}
                                    </Typography>
                                </div>
                                <div className='cb3'>
                                    <div>
                                        <div className='cb4'>
                                            <div>
                                                <span className='cb01'>MRP</span>
                                                <span className='cb02'>₹{e.mrp}</span>
                                                <span className='cb03'>23% off</span>
                                            </div>


                                        </div>
                                    </div>
                                    <div className='cb5'>
                                        <p>
                                            ₹{e.actMrp}
                                        </p>
                                    </div>
                                    <div>
                                        <Typography variant='body1' marginTop={3} color='green'>Available slots- {e.slots}/10</Typography>
                                    
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                        <CardActions>
                            <Button>Book slot</Button>
                        </CardActions>
                    </Card>
                    </Grid>
    )})}
                </Grid>  
            </Box>
        </Container>
    )
}

export default Plans