import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const styles = {
  navList: {
    display: 'flex',
    gap: '12px',
    padding: '12px',
    fontWeight: '700',
  },
  navLink: {
    textDecoration: 'none',
    color: '#2a363b',
    fontSize: '18px',
  },
};

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav style={styles.navList}>
      <NavLink style={styles.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink style={styles.navLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
