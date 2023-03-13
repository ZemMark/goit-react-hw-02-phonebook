import { Component } from 'react';
import Filter from './Filter/Filter';
import ContactsList from './Contacts/ContactsList';
import Form from './Form/Form';
import { Container } from './App.styled';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export class App extends Component {
  state = {
    
    contacts: [],
    filter: '',
  };
  
  
  
  handleFilter = e => {
    const { value } = e.target;
    const visible = this.state.contacts.reduce((acc, el) => {
      if (el.name.toLowerCase().includes(value.toLowerCase())) {
        acc = [...acc, el];
      }
      return acc;
    }, []);
    this.setState({ filter: value, visible: visible });
    return visible;
  };
  addCard = (card) => {
    this.setState((prevState)=>({contacts: [...prevState.contacts, card]}))
  }
  deletePhoneCard = (id, e) => {
    const updatedArray = this.state.contacts.filter(
      contact => contact.id !== id
    );
    Confirm.show(
      'Delete this card?',
      'this card can not be resored',
      'Yes',
      'No',
      () => {
    this.setState({ contacts: [...updatedArray] });

      },
      () => {
        return
      },
      {}
    );
    
  };

  render() {
    const { contacts, visible, filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form
          contacts={this.state.contacts}
          addCard={this.addCard}
        />
        <h2>Contacts</h2>
        <Filter filter={this.handleFilter} />
        <ContactsList
          data={filter ? visible : contacts}
          deleteFn={this.deletePhoneCard}
        />
      </Container>
    );
  }
}
