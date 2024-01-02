import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authOperation';
import { useState } from 'react';
import { Form, Item, Field, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hanleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Item>
        Username
        <Field
          type="text"
          name="name"
          value={name}
          required
          onChange={hanleChange}
        />
      </Item>
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
      <Button type="submit">Register</Button>
    </Form>
  );
};
