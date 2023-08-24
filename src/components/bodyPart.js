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
          borderTop: bodyPart === item ?  '4px solid #ff2625' : '',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          gap: '47px',
          cursor: 'pointer'
      }}
    >
      <img src={Icon} alt="dumbell" styles={{ width: '40px', height: '40px' }} />
    </Stack>
  )
}

export default BodyPart