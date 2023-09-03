import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { css } from '@emotion/css';

const boxShadow = css`
  box-shadow: 
    0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <BottomNavigation 
      showLabels
      value={ location.pathname }
      className={ boxShadow }
    >
      <BottomNavigationAction 
        component={Link}
        label="Browse"
        value="/"
        to="/"
        icon={ <SearchIcon /> } 
      />

      <BottomNavigationAction 
        component={Link}
        label="Add" 
        value="/add"
        to="/add"
        icon={ <AddIcon /> } 
      />
    </BottomNavigation>
  );
};