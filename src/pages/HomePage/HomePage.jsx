import { Toaster } from 'react-hot-toast';

import Description from '../../components/Description/Description';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import Container from '../../components/Container/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Description
        title="Phonebook"
        description="Please add your contacts in the phonebook by filling the form below."
      />
      <ContactForm />
      <Container variant="outerContainer">
        <SearchBox />
        <ContactList />
      </Container>
      <Toaster
        toastOptions={{
          removeDelay: 300,
        }}
      />
    </>
  );
}
