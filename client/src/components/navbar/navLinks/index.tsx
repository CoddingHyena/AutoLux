import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { NavLink } from './navItem';
import NavMenu from './navMenu';
import { useAppSelector } from '../../../redux/hooks';

function NavLinks({ navItems }) {
  const user = useAppSelector((store) => store.userSlice.user);
  const { role } = user;
  console.log(role);
  const navMenuItems = navItems.map((item) => {
    const { title, type, Icon, id, menuMinWidth, menuChildren, href, role = 'all' } = item;

    switch (role) {
      case 'all':
        return (
          <>
            <div className="debugel">Кейс все</div>
            <NavLink key={id} href={href} Icon={Icon} title={title} />
          </>
        );
      case 'accessAdmin':
        return (
          <>
            <div className="debugel">Кейс админ</div>
            <NavLink key={id} href={href} Icon={Icon} title={title} />
          </>
        );
      case 'accessBoss':
        return (
          <>
            <div className="debugel">Кейс босс</div>
            <NavLink key={id} href={href} Icon={Icon} title={title} />
          </>
        );
      case 'accessManager':
        return (
          <>
            <div className="debugel">Кейс манагер</div>
            <NavLink key={id} href={href} Icon={Icon} title={title} />
          </>
        );
      case 'none':
        return (
          <>
            <div className="debugel">Кейс неавторизованные</div>
            <NavLink key={id} href={href} Icon={Icon} title={title} />
          </>
        );

      default:
        return (
          <>
            <div className="debugel">Кейс дефолт</div>
            <Typography variant="h6" color="error" align="center">
              Menu Items Error
            </Typography>
          </>
        );
    }
  });
  return (
    <Stack
      width="100%"
      direction="row"
      component="nav"
      borderLeft={1}
      borderColor="border"
      flexWrap="wrap"
    >
      {navMenuItems}
    </Stack>
  );
}

// function NavLinks({ navItems }) {
// 	const user = useAppSelector((store) => store.userSlice.user)
// 	const navMenuItems = navItems.map((item) => {
// 		const { title, type, Icon, id, menuMinWidth, menuChildren, href, role='' } = item;

// 		switch (type) {
// 			case 'group':
// 				return (
// 					<>
// 					<div className="debugel">Кейс группа</div>
// 					<NavMenu key={id} minWidth={menuMinWidth} menuChildren={menuChildren} Icon={Icon} title={title} />
// 					</>
// 				);
// 			case 'item':
// 				return (
// 					<>
// 					<div className="debugel">Кейс итем</div>
// 					<NavLink key={id} href={href} Icon={Icon} title={title} />
// 					</>);
// 			default:
// 				return (
// 					<>
// 					<div className="debugel">Кейс дефолт</div>
// 					<Typography variant="h6" color="error" align="center">
// 						Menu Items Error
// 					</Typography>
// 					</>
// 				);
// 		}
// 	});
// 	return (
// 		<Stack width="100%" direction="row" component="nav" borderLeft={1} borderColor="border" flexWrap="wrap">
// 			{navMenuItems}
// 		</Stack>
// 	);
// }

export default NavLinks;
