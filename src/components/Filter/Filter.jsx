import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <form>
      <label>
        <p>Find contact by name</p>
        <FilterInput type="text" value={filter} onChange={onChange} />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
