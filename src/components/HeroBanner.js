import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position="relative" p="20px">
      <Typography color="#5E6F00" fontWeight="600" fontSize="56px">
          Navas Fitness
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Suda, Sorridi <br /> e Ripeti
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Scopri gli esercizi più efficaci
      </Typography>
      <Button href="#exercises" variant="contained" style={{ color: "#5E6F00", backgroundColor: '#D8FF00', padding: '15px' }}>Explora Gli Esercizi</Button>
      {/* Background text */}
      <Typography
        fontWeight={600}
        color='#5e6foo'
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner