// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// Icons
import NavLinks from './navLinks';

function Navbar({ navItems, position = 'sticky' }) {
  return (
    <AppBar
      position={position}
      elevation={26}
      sx={{ borderLeft: 0, borderRight: 0, borderTop: 0, paddingBottom: 0, marginBottom: 1 }}
    >
      <div className="debugel">Навбар</div>
      <Box bgcolor="background.paper" sx={{ paddingTop: 3 }}>
        <div className="debugel">Линки контейнер</div>
        <NavLinks navItems={navItems} />
      </Box>
    </AppBar>
  );
}

export default Navbar;
