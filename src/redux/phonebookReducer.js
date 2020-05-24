import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import reducerType from './reducerType';

const contactItems = createReducer([], {
  [reducerType.GET_CONTACT]: (state, { payload }) => [...state, payload],
  [reducerType.DELETE_CONTACT]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [reducerType.FILTER_INPUT]: (state, { payload }) => payload,
});

export default combineReducers({
  contactItems,
  filter,
});
