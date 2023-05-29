import React from 'react'
import { Typography,Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetItems from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


function Detail({exerciseDetail}) {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

    extraDetail
  return (
    <Stack gap='60px' sx={{flexDirection: {lg:'row'}, p: '20px', alignItems:'center'}}>
        <img src={gifUrl} alt='Name Exercise' loading='lazy' className='detail-image'/>
        <Stack sx={{gap: {lg: '35px', xs:'20px'}}}>
            <Typography variant='h4' fontWeight='700'>
                {name}
            </Typography>
            <Typography variant='h6' fontWeight='400'>
                Exercising Will keep you healthy. {name} {``}
                is one of the best exercise to train your {target}.
            </Typography>
        </Stack>
    </Stack>
  )
}

export default Detail