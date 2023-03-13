import { Component } from 'react';
import { FormContainer } from './Form.styled';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
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
    const isAlreadyExists = this.props.contacts.find(
      el => el.name === card.name
    );
    if (isAlreadyExists) {
      alert(
        'already exists. Try to find this card in your phonebook or pick more specific name'
      );
    } else {
      this.props.addCard(card);
      this.reset();
    }
  };
  reset = () => {
    this.setState({ name: '' });
    this.setState({ number: '' });
  };
  render() {
    return (
      <FormContainer onSubmit={this.onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onInput}
          autoFocus={true}
          value={this.state.name}
        />
        <label>Phone</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onInput}
          value={this.state.number}
        />
        <button type="submit">save</button>
      </FormContainer>
    );
  }
}
export default Form;
