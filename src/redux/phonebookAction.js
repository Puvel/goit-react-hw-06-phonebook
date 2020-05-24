import { createAction } from '@reduxjs/toolkit';

const getContact = createAction('contacts/GET_CONTACT');
const deleteContact = createAction('contacts/DELETE_CONTACT');
const filterInput = createAction('contacts/FILTER_INPUT');

export default { getContact, filterInput, deleteContact };
