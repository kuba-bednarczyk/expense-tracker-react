import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// Initial state
const initialState = {
  transactions: [
    {id: 111233232, text: 'Spodnie', amount: -150},
    {id: 223321122, text: 'Koszula biała', amount: -120},
    {id: 312309976, text: 'Koszula niebieska', amount: -130},
    {id: 423123784, text: 'Praca dorywcza', amount: 340},
  ]
};

// Create context;
export const GlobalContext = createContext(initialState);

// Provider component
const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  };

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalContextProvider;