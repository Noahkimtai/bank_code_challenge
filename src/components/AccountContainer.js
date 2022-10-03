import React, {useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

// TransactionList component should fetch all the transactions form db.json
// for every transaction fetched Transaction component will be rendered 
// It passes transaction down to Transaction component
function AccountContainer() {
  // create state to hold the list of transactions
  const [transactionList, setTransactionList] = useState([]);
  // fetch list of transactions as a side effect of the page load
  useEffect(() =>{
    fetch('http://localhost:8001/transactions').then(res => res.json())
    .then(data => setTransactionList(data))
  },[]);

  // create state to hold the searched transactions
  const [search, setSearch] = useState([...transactionList])
  // function to filter the data based on the search
  function searchLogic(searchDescription){
    fetch('http://localhost:8001/transactions').then(r =>r.json()).
    then(data => {const filteredData = data.filter(el =>el.description.includes(searchDescription))
    setTransactionList(filteredData)
  });
  }


  
  return (
    <div>
      <Search searchLogic ={searchLogic}/>
      <AddTransactionForm transactionList ={transactionList}/>
      <TransactionsList transactionList = {transactionList}/>
    </div>
  );
}

export default AccountContainer;
