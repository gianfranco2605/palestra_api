import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' } }} 
    >
      <Link to="/">
        <img src={Logo} style={{ width: '58px', height: '58px', margin: '0 20px' }} alt="logo" />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#5E6F00', borderBottom: '3px solid #D8FF00'}}>Inizio</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#5E6F00'}}>Esercizi</a>
      </Stack>
    </Stack>
  )
}

export default Navbar