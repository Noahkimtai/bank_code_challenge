import React from "react";

// the transaction component will take a single transaction as a prop
// it will then display  date, description,category and amount of the transaction
function Transaction({transaction}) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;
