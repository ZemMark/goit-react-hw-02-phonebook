import { Component } from 'react';
export class ContactsList extends Component {
  render() {
    const { data, deleteFn } = this.props;
    return (
      <ul>
        {data.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name}, {number}
            </p>
            <button type="button" onClick={e => deleteFn(id, e)}>
              -
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactsList;
