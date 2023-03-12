import { Component } from 'react';
import Filter from './Filter/Filter';
import ContactsList from './Contacts/ContactsList';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import {Container} from './App.styled'

export class App extends Component {
  state = {
    contacts: [
    ],
    name: '',
    number: '',
    filter: '',
  };
  onInput = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    const card = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    const isAlreadyExists = this.state.contacts.find(
        el => el.name === card.name
      );
    if (isAlreadyExists) {
      alert('already exists. Try to find this card in your phonebook or pick more specific name')
    } else {
      this.setState((prevState) => ({ contacts: [...prevState.contacts, {...card}]}), this.reset)}
    }
  reset = () => {
    this.setState({ name: '' });
    this.setState({ number: '' });
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
  deletePhoneCard = (id, e) => {
    const updatedArray = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: [...updatedArray] })
  }
  
  render() {
    const { contacts, visible, filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form
          input={this.onInput}
          onSubmit={this.onSubmit}
          name={this.state.name}
          number={this.state.number}
        />
        <h2>Contacts</h2>
        <Filter filter={this.handleFilter} />
        <ContactsList data={filter ? visible : contacts} deleteFn={ this.deletePhoneCard} />
      </Container>
    );
  }
}
