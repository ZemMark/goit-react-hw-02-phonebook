import { Component } from 'react';
import { FilterContainer } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <FilterContainer>
        <label htmlFor="filter">Search by name</label>
        <input
          onChange={this.props.filter}
          id="filter"
          placeholder="Start typing name..."
        ></input>
      </FilterContainer>
    );
  }
}
export default Filter;
