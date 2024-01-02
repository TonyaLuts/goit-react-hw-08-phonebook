import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../redux/auth/authOperation';
import { Form, Item, Button, Field } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hanleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Item>
        Email
        <Field
          type="email"
          name="email"
          value={email}
          required
          onChange={hanleChange}
        />
      </Item>
      <Item>
        Password
        <Field
          type="password"
          name="password"
          value={password}
          required
          autoComplete="off"
          onChange={hanleChange}
        />
      </Item>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
