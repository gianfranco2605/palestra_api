import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOffFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOffFirstExercise, indexOfLastExercise)

  const paginate = ( e, value ) => {
    setCurrentPage(value);
  
    // going to the top after clicking pagination
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(( ) => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      }else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);

    }

    fetchExercisesData();

  }, [bodyPart])

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' }, color: '#6B6B6B' }} mt="50px" p="20px">
      <Typography variant="h3" mb= "46px">
        Mostrando Risultati
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      {/* Pagination Materials */}
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination 
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises