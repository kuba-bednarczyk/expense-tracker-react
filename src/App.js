import './App.css';

import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import SwitchButton from './components/SwitchButton';

const App = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className='App' id={theme}>
      <SwitchButton />
      <div className='container'>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
};

export default App;
