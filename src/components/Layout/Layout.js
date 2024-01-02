import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Toaster } from 'react-hot-toast';

export const AppLayout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Outlet />
      </main>
      <GlobalStyle />
      <Toaster />
    </Container>
  );
};
