import React, {useState,useEffect} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import {exerciseOptions, fetchData } from '../utils/fetchData';

function SearchExercises() {
    const [Search, setSearch] = useState('')
    const [Exercises, setExercises] = useState([]);
    useEffect(()=>{
        const fetchExercisesData = async() => {
            
        }
    })

    const handleSearch = async () => {
        if (Search) {
          const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
          
          const searchedExercises = exercisesData.filter(
            (item) => item.name.toLowerCase().includes(Search)
                   || item.target.toLowerCase().includes(Search)
                   || item.equipment.toLowerCase().includes(Search)
                   || item.bodyPart.toLowerCase().includes(Search),
          );
    
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    
          setSearch('');
          setExercises(searchedExercises);
        }
      };
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight='700' sx={{
            fontSize:{lg : '44px', xs:'30px'}
        }} mb='50px' textAlign='center'>
            Awesome Exercises <br/>
            You might not know
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField
                sx={{
                    input:
                    {
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '4px'
                    },
                    width:{
                        lg: '800px', xs:'350px'
                    },
                    backgroundColor: '#fff',
                    borderRadius: '40px'
                }}
                height= '76px'
                value={Search}
                onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                placeholder='Search Exercises'
                type='text'
            />
            <Button 
                className='search-btn'
                sx={{
                    bgcolor:'#FF2625',
                    color:'#fff',
                    textTransform: 'none',
                    width:{ lg: '175px', xs: '80px'},
                    fontSize: {lg: '20px', xs: '14px'},
                    height: '56px',
                    position: 'absolute',
                }}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises