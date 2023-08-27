import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazi" />
      <Stack direction="row">

        <Button sx={{ ml:'21px', color: "#5E6F00", background: '#D8FF00', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>{exercise.bodyPart}</Button>

        <Button sx={{ ml:'21px', color: "#5E6F00", background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>{exercise.target}</Button>

      </Stack>

      <Typography ml="21px" color= '#000' fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
        {exercise.name}
      </Typography>

    </Link>
  )
}

export default ExerciseCard