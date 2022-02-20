// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from './Contexts/User-Context';
// import '../styles/sidebar.css'
// import { Logout } from '@mui/icons-material';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));

// export default function PersistentDrawerRight() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const { loggedInUser, setLoggedInUser } = React.useContext(UserContext)
//   const navigate = useNavigate()

//   const logOut = () => {
//       setLoggedInUser(null)
//       navigate(`/`)
//     }

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
//               <Link to={`/categories`}>
//             NC Games
//               </Link>
//           </Typography>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerOpen}
//             sx={{ ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//        <Main open={open}>
//          {/* <DrawerHeader />  */}
//             Hello
//          {/* </Main> */}
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//           },
//         }}
//         variant="persistent"
//         anchor="right"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//             <ListItem button key='profile'>
//                 <Link to={`/users/${loggedInUser.username}`}>
//               <ListItemIcon >
//                 <InboxIcon />
//               </ListItemIcon>
//               <img onClick={handleDrawerClose} className='sidebar-profile' src={loggedInUser.avatar_url} alt={loggedInUser.avatar_url} />
//               </Link>
//             </ListItem>

//             <ListItem className='sidebar-categories'>
//             <Link onClick={handleDrawerClose} to={`/categories`}>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               Categories
//               </Link>
//             </ListItem>

//             <ListItem className='sidebar-reviews'>
//             <Link onClick={handleDrawerClose} to={`/reviews`}>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               Reviews
//               </Link>
//             </ListItem>

//             <ListItem className='sidebar-users'>
//             <Link onClick={handleDrawerClose} to={`/users`}>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               Users
//               </Link>
//             </ListItem>

//             <ListItem onClick={() => logOut()} className='sidebar-logout'>
//             <Link to={`/`}>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               Log out
//               </Link>
//             </ListItem>
//         </List>
//         <Divider />
//       </Drawer>
//     </Box>

//   );
// }
