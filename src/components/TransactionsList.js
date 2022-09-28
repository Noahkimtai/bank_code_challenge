import React, {useState, useEffect} from "react";
import Transaction from "./Transaction";

// TransactionList component should fetch all the transactions form db.json
// for every transaction fetched Transaction component will be rendered 
// It passes transaction down to Transaction component
function TransactionsList() {
  // create state to hold the list of transactions
  const [transactionList, setTransactionList] = useState([]);
  // fetch list of transactions as a side effect of the page load
  useEffect(() =>{
    fetch('http://localhost:3002/transactions').then(res => res.json())
    .then(data => setTransactionList(data))
  },[]);

  //create Transaction component for every 
  const transactionRow = transactionList.map((transactionEl) =><Transaction transaction ={transactionEl}/>)
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
        {transactionRow}
      </tbody>
    </table>
  );
}

export default TransactionsList;
