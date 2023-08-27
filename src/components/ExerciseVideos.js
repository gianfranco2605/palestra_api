import { Box, Stack, Typography } from "@mui/material"

const ExerciseVideos = ({ exerciseVideos, name }) => {

  if(!exerciseVideos.length) return "Caricando..";

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant="h3" mb="33px">
        Guarda esercizi su <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> 
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' }  }}>
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blank"
            rel="noreferrer"
          >
            <img  src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Typography variant="h5" color="#000">{item.video.title}</Typography>
            <Typography variant="h6" color="#000">{item.video.channelName}</Typography>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos