import { Component } from 'react';
import Filter from './Filter/Filter';
import ContactsList from './Form/Contacts/ContactsList';
import Form from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Mark', number: '3248926498264892364', id: 1 },
      { name: 'Dania', number: '2349238492384', id: 2 },
    ],
    name: '',
    number: '',
    filter: '',
  };
  onInput = e => {
    const { name } = e.target;
    console.log(name);
    const { value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    const card = {
      name: this.state.name,
      number: this.state.number,
      id: this.state.contacts.length + 1,
    };
    this.setState(
      prevState => ({
        ...prevState,
        contacts: [...prevState.contacts, { ...card }],
      }),
      this.reset
    );
  };
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
    console.log('visible:', this.state.visible );
    return visible;
  };

  render() {
    const { contacts, visible, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          input={this.onInput}
          onSubmit={this.onSubmit}
          name={this.state.name}
          number={this.state.number}
        />
        <h2>Contacts</h2>
        <Filter filter={this.handleFilter} />
        <ContactsList data={filter? visible:contacts} />
      </div>
    );
  }
}
