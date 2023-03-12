import { Component } from 'react';
import { ContactList } from './Contacts.styled.jsx';
import PropTypes from 'prop-types';
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
ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactsList;
