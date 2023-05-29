import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
function SimiliarExercises({targetMuscleExercises, equipmentExercises}) {
  return (
    <Box
        sx={{mt:{lg:'100px', xs: '0'}}}
    >
        <Typography variant='h4' mb={5}>Exercises that similiar to this Exercise</Typography>

        <Stack direction='row' sx={{p: '2', position:'relative'}}>
            {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/>
             : <Loader/>}
        </Stack>

        <Typography variant='h4' mb={5}>Exercises that use the same equipment as this one</Typography>

        <Stack direction='row' sx={{p: '2', position:'relative'}}>
            {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/>
             : <Loader/>}
        </Stack>
    </Box>
  )
}

export default SimiliarExercises