import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import PhoneBook from './phoneBook/PhoneBook';
import ContactsList from './contactsList/ContactsList';
import FilterInput from './filterInput/FilterInput';
import phonebookAction from '../redux/phonebookAction';
import filterTransition from '../transition/filterTransition.module.css';

class App extends Component {
  contactsFilter = () => {
    return this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase()),
    );
  };

  render() {
    const {
      getContact,
      contacts,
      filter,
      filterInput,
      deleteContact,
    } = this.props;
    return (
      <>
        <section className="section">
          <PhoneBook getContact={getContact} contacts={contacts} />
        </section>

        <section className="section">
          <h2 className="sectionTitle">Contacts</h2>
          <CSSTransition
            in={contacts.length > 2}
            timeout={250}
            classNames={filterTransition}
            unmountOnExit
          >
            <FilterInput filter={filter} filterInput={filterInput} />
          </CSSTransition>
          <ContactsList
            contacts={this.contactsFilter()}
            deleteContact={deleteContact}
          />
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contactItems,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  getContact: phonebookAction.getContact,
  deleteContact: phonebookAction.deleteContact,
  filterInput: phonebookAction.filterInput,
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  getContact: PropTypes.func.isRequired,
  filterInput: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
