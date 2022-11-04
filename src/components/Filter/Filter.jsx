import PropTypes from 'prop-types';
import React from "react";
import { useDispatch } from 'react-redux';

//REDUX
import { setFilter } from 'redux/filter/slice'

export default function Filter({ filter }) {
  const dispatch = useDispatch();

    const onChangeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value))
    };
  
  return (
    <>
      <h1>Contacts</h1>
      <input type="text" name='filter' value={filter} onChange={onChangeFilter} /></>
    )
}
Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};