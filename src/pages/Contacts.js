import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ContactForm } from 'components/ContactForm/ContactForm';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../redux/contacts/contactsSelectors';
// import { ContactList } from 'components/ContactList/ContactList';
// import { FilterContact } from 'components/Filter/Filter';
import * as contactsOperation from '../redux/contacts/contactsOperation';
// import { Loader } from 'components/Loader/Loader';
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
