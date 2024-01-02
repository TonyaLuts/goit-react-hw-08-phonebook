import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/authSelectors';
import { logOutUser } from '../../redux/auth/authOperation';
import avatar from './avatar.png';
import { Container, UserName, Btn } from 'components/UserMenu/UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);

  return (
    <Container>
      <img src={avatar} alt="" width="32" />
      <UserName>Welcome, {name}</UserName>
      <Btn type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </Btn>
    </Container>
  );
};
