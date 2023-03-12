import { Component } from 'react';
import { FormContainer } from './Form.styled';
export class Form extends Component {
  render() {
    return (
      <FormContainer onSubmit={this.props.onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.props.input}
          autoFocus={true}
          value={this.props.name}
        />
        <label>Phone</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.props.input}
          value={this.props.number}
        />
        <button type="submit">save</button>
      </FormContainer>
    );
  }
}
export default Form;
