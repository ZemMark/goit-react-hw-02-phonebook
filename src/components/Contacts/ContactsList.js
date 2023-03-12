import { Component } from 'react';
import { ContactList } from './Contacts.styled.jsx';
export class ContactsList extends Component {
  render() {
    const { data, deleteFn } = this.props;
    return (
      <ContactList>
        {data.map(({ name, number, id }) => (
          <li key={id}>
            <input type="checkbox"></input>
            <p>
              {name}, {number}
            </p>
            <button type="button" onClick={e => deleteFn(id, e)}>
              -
            </button>
          </li>
        ))}
      </ContactList>
    );
  }
}

export default ContactsList;
