import React, { useContext, useState } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [searchWord, setSearchWord] = useState('');

  const filteredTransactions = transactions.filter((transaction) => {
    return transaction.text.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <>
      <h3>History</h3>
      <input
        type='text'
        placeholder='Search transaction...'
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <ul className='list'>
        {filteredTransactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      {filteredTransactions.length === 0 && (<p><strong>There's no such a transaction!</strong></p>)}
      </ul>
    </>
  );
};

export default TransactionList;
