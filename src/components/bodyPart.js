import { Stack, Typography } from "@mui/material";

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type= 'button'
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
          borderTop: bodyPart === item ?  '4px solid #5E6F00' : '',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          gap: '47px',
          cursor: 'pointer'
      }}
      onClick={() => {setBodyPart(item); window.scrollTo({top: 1800, left: 100, behaivor: 'smooth'})}}
      
    >
      <img src={Icon} alt="dumbell" width="40px" height="40px" />
      <Typography fontSize="24px" fontWeight="bold" color="#6B6B6B" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart