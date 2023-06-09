import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {exerciseOptions, fetchData, YoutubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimiliarExercises from '../components/SimiliarExercises';

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const FetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, YoutubeOptions);
      setExerciseVideo(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData); 
    }
    FetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideo} name={exerciseDetail.name}/>
      <SimiliarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail