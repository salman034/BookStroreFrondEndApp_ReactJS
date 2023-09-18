import React from 'react';
import './Header.css';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Header(props) {

    const fetchBooks = (event) => {
      props.showSearchingBooks(event.target.value);
    } 

    return (
        <div className='header-container'>
            <div className='header-section-one'>
                <ImportContactsIcon style={{color: 'white'}}/>
                <Typography className='store-title-container'>Bookstore</Typography>
            </div>
            <Search className='searchbar' style={{ width: '40%',height: '60%'}}>
                <SearchIconWrapper>
                <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={fetchBooks}
                />
            </Search>
            {/* <Link to="/login"><Typography color='white'>Logout</Typography></Link> */}
            <div className='header-options-container'>
                <div className='header-option'>
                    <Link to="/cart"><IconButton aria-label="cart">
                      <StyledBadge badgeContent={props.length} style={{"color":"white"}}>
                      <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
