import React, {useState, useEffect} from "react";
import Transaction from "./Transaction";


function TransactionsList({transactionList}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactionList.map((transactionEl) =><Transaction key={transactionEl.id} transaction ={transactionEl}/>)}
      </tbody>
    </table>
  );
}

export default TransactionsList;
