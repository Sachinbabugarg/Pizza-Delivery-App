import React,{useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../Actions/action";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { toast, ToastContainer } from "react-toastify";


//FaUserEdit

function Nav(props) {
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.warning.light, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.warning.light, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

    let t;
    let role;
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const temp = useSelector((state) => state);
    if (typeof temp !== 'undefined' ){
       if(temp.user){
        t=temp.user.customerName;
        
        role=temp.user.type;
       }
    }
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleLogout=(event)=>{
    event.preventDefault();
    dispatch(setLogout());
    toast.dark('Logged Out Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    navigate("/");
  }
  const handleAddProduct=(event)=>{
    event.preventDefault();
    setAnchorElUser(null);
    navigate("/pizzamgmt");
    
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
      navigate("/BookOrder");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          onClick={()=> navigate("/")}
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Pizza
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography onClick={()=> navigate("/")} textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Pricing</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography onClick={() => navigate("/ViewCoupan")} textAlign="center">Coupon</Typography>
              </MenuItem>
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Pizza
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Pizza
            </Button>
            
          
            <Button
              onClick={()=> navigate("/")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Home
            </Button>
             <Button
              onClick={() => navigate("/ViewCoupan")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Coupon
            </Button>    
        </Box>
        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box> */}
         { t ?
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={t}   src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            
              <MenuItem  onClick={()=> navigate("/profile")}>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem  onClick={() => navigate("/BookOrder")}>
                <Typography onClick={() => navigate("/BookOrder")}textAlign="center">Book Order</Typography>
              </MenuItem>
              <MenuItem  onClick={() => navigate("/vieworder")}>
                <Typography textAlign="center">View Order</Typography>
              </MenuItem>
              {role==='admin' ?
              <div>
                <MenuItem  onClick={handleAddProduct}>
                <Typography textAlign="center">Pizza Management</Typography>
              </MenuItem>
              <MenuItem  onClick={()=> navigate("/viewAllPizzaOrder")}>
                <Typography textAlign="center">View All Pizza Order</Typography>
              </MenuItem>
              <MenuItem  onClick={()=> navigate("/Coupan")}>
                <Typography textAlign="center">Coupon Management</Typography>
              </MenuItem>
              </div>:<MenuItem></MenuItem>}
              <MenuItem  onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            
          </Menu>
        </Box>:
        <Box sx={{ flexGrow: 0 }}>
          <Button
              onClick={()=>navigate("/login")}
              sx={{ color: 'white', display: 'block' }}
            >
            Login
            </Button>
          </Box> }
      </Toolbar>
    </Container>
  </AppBar>
  );
}

export default Nav;