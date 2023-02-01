import { useSelector, useDispatch } from 'react-redux';
import { Section } from 'components/section/Section';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactsList } from 'components/contactsList/ContactsList';
import { Filter } from 'components/filter/Filter';
import { remove, setFilter } from 'redax/slices';

export const App = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state);

  const filterInput = e => dispatch(setFilter(e.target.value));

  const contactsFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = e => dispatch(remove(e.target.id));

  return (
    <>
      <Section title="Phonebook">
        <ContactForm contacts={contacts} />
      </Section>
      <Section title="Contacts">
        {!!contacts.length && (
          <Filter filter={filter} filterInput={filterInput} />
        )}
        <ContactsList
          contacts={contactsFilter()}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
