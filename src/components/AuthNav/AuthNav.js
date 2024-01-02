import { NavLink } from 'react-router-dom';

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

export const AuthNav = () => {
  return (
    <div style={styles.navList}>
      <NavLink style={styles.navLink} to="/register">
        Register
      </NavLink>
      <NavLink style={styles.navLink} to="/login">
        Log In
      </NavLink>
    </div>
  );
};


