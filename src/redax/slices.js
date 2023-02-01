import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      state.push(payload);
    },
    remove: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { setFilter: (state, { payload }) => payload },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const { add, remove } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;
export const persistedReducer = persistReducer(persistConfig, rootReducer);
