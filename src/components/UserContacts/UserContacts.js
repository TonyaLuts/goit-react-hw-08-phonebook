import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/contactsSelectors';
import { ContactList } from 'components/ContactList/ContactList';
import { FilterContact } from 'components/Filter/Filter';
import * as contactsOperation from '../../redux/contacts/contactsOperation';
import { Loader } from 'components/Loader/Loader';
import { Container } from './UserContacts.styled';

export const UserContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts && (
        <>
          <h2>Contacts</h2>
          <FilterContact />
        </>
      )}
      {isLoading && !error && <Loader />}
      {contacts && <ContactList></ContactList>}
    </Container>
  );
};


