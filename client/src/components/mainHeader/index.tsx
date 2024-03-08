import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

// assets
import logo from '@/assets/images/logo/png/Color_logotext2_nobg.png';

import LoggedUser from './loggedUser';
// import SearchBar from './searchBar';

function MainHeader() {
  return (
    <Box bgcolor="background.paper" component="header" py={1.5} zIndex={1}>
      <div className="debugel">Бокс хедер</div>
      <Stack
        component={Container}
        maxWidth="lg"
        direction="row"
        height={50}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        spacing={3}
        overflow="hidden"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <div className="debugel">Стек типографика</div>
          <Box
            component="img"
            width={{
              xs: 100,
              sm: 230,
            }}
            src={logo}
            alt="logo"
          />
        </Stack>

        <LoggedUser />
      </Stack>
    </Box>
  );
}

export default MainHeader;
