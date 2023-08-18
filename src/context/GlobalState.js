import React, { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';

const isDataExists = localStorage.getItem('TRANSACTIONS') !== null;
const initialState = {
  transactions: isDataExists ? JSON.parse(localStorage.getItem('TRANSACTIONS')) : [],
};

// Create context;
export const GlobalContext = createContext(initialState);

// Provider component
const GlobalContextProvider = ({ children }) => {
  // state for the data
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // state for the theme
  const [theme, setTheme] = useState('light');

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });

    const updatedItems = state.transactions.filter((transaction) => transaction.id !== id );
    localStorage.setItem('TRANSACTIONS', JSON.stringify(updatedItems));
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });

    const updatedItems = [...state.transactions, transaction];
    localStorage.setItem('TRANSACTIONS', JSON.stringify(updatedItems));
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        theme,
        setTheme
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
