import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/gymmnobg.png';

function HeroBanner() {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness
        </Typography>
        <Typography fontWeight='700' sx={{
            fontSize:{lg: '44px', xs:'40px'}
        }} mb='23px' mt='30px'>
            Work Hard Gain Hard <br/> Keep up
        </Typography>
        <Typography fontWeight='600' fontSize='22px' lineHeight='35px' mb='5'>
            Check out the most efficient workout
        </Typography>
        <Typography 
            fontWeight='800'
            color='#ff2625'
            sx={{
                opacity: 0.1,
                display: {lg: 'block', xs: 'none'}
            }}
            fontSize='200px'
        >
            Do Your Exercise
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor: '#ff2625', padding: '10px'}}>Explore Exercises</Button>


            {/* uncomment below if you want to use image */}
        {/* <img src={HeroBannerImage} alt='Banner' className='hero-banner-img'/> */}
    </Box>
  )
}

export default HeroBanner