import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, exerciseOptions, youTubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetails = () => {

  const [exerciseVideos, setExerciseVideos] = useState({})
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // fetch = state

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
  
      setExerciseDetail(exerciseDetailData);

      // youtube fetch
      const exerciseVideoData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`, youTubeOptions);

      setExerciseVideos(exerciseVideoData.contents)

      // similar exercises
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);

      setTargetMuscleExercises(targetMuscleExercisesData)

      // similar equipment exercises
      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)

      setEquipmentExercises(equimentExercisesData)

    };

    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails