import Contact from '../Contact/Contact';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contacts.length > 0 ? (
        <Container variant="innerContainer">
          <Heading variant="cardTitle">
            Contacts <span>| Your contact list</span>
          </Heading>

          <ul className={css.contactsList}>
            {contacts.map(contact => (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                avatar={
                  contact.avatar ||
                  'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
                }
                id={contact.id}
              />
            ))}
          </ul>
        </Container>
      ) : (
        <ErrorMessage message="No contacts found for your search query. Please try again." />
      )}
    </>
  );
}
