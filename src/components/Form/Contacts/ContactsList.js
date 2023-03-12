import { Component } from 'react';
export class ContactsList extends Component {
  render() {
    const { data } = this.props;
    return (
      <ul>
        {data.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name}, {number}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactsList;
