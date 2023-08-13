import React from 'react'

const Transaction = ({transaction}) => {
  const {text, amount} = transaction;

  console.log(amount[0])

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}<span>{amount > 0 && ('+')}{amount} PLN</span>
    <button className='delete-btn'>x</button>
  </li>
  )
}

export default Transaction
