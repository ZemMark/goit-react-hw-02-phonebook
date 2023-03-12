import { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="filter">Search by name</label>
        <input onChange={this.props.filter} id="filter"></input>
      </div>
    );
  }
}
export default Filter;
