import { GiOpenBook } from 'react-icons/gi';

const styles = {
  container: {
    marginTop: '20px',
    marginLeft: '20px',
    // minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '12px',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the phone book!</h1>
      <span>
        <GiOpenBook size="62" />
      </span>
    </div>
  );
};

export default Home;
