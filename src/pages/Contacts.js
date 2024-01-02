import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as contactsOperation from '../redux/contacts/contactsOperation';
import { UserContacts } from 'components/UserContacts/UserContacts';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <UserContacts />
    </>
  );
};

export default Contacts;
