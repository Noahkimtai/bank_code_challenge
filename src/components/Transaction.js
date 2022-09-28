import React from "react";

// the transaction component will take a single transaction as a prop
// it will then display  date, description,category and amount of the transaction
function Transaction({transaction}) {
  return (
    <tr>
      <td>{"your code here..."} this component gets loaded{transaction.date}</td>
      <td>{"your code here..."}{transaction.description}</td>
      <td>{"your code here..."}{transaction.category}</td>
      <td>{"your code here..."}{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;
