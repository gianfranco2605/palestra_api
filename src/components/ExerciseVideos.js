import { Box, Stack, Typography } from "@mui/material"
import Loader from "./Loader"

const ExerciseVideos = ({ exerciseVideos, name }) => {

  if(!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' }, marginBottom: { lg: '100px', xs: '100px' } }} p="20px">
      <Typography color="#6B6B6B" variant="h3" mb="75px">
        Guarda Videos su <span style={{ color: '#5E6F00', textTransform: 'capitalize', fontWeight: "700" }}>{name}</span> 
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '50px' },   }}>
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blank"
            rel="noreferrer"
          >
            <img  src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Typography variant="h5" color="#6B6B6B">{item.video.title}</Typography>
            <Typography variant="h6" color="#6B6B6B">{item.video.channelName}</Typography>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos