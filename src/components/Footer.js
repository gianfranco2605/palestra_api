import { Box, Stack, Typography } from "@mui/material";
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f3">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="100px" />
        <Typography color='#6B6B6B' variant="h5" pb="40px" mt="20px">
          Made with ♥️ by DigitalNavas
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer