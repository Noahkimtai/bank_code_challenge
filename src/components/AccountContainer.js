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
    fetch('http://localhost:3002/transactions').then(res => res.json())
    .then(data => setTransactionList(data))
  },[]);

  // create state to hold the searched transactions
  const [search, setSearch] = useState([...transactionList])
  // function to filter the data based on the search
  function searchLogic(searchDescription){
    fetch('http://localhost:3002/transactions').then(r =>r.json()).
    then(data => {const filteredData = data.filter(el =>el.description.includes(searchDescription))
    setTransactionList(filteredData)
  });
  }

  //handle formdata 
  // Add submission to transaction list on the page
    /* transactionArray.map((transactionEl) =><Transaction transaction ={transactionEl}/>) */
    // post the data to db.json
  function postFormData(formData){  
    fetch('http://localhost:3002/transactions',{
      method:'POST',
      body: JSON.stringify(formData),
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    ).then(r => r.json())
    .then(data => {
      let newArray = [];
      newArray.push(data)
      // update the dom with posted data
      setTransactionList(newArray)
      alert('Your transaction was added successfully!')
    });
  }
  
  return (
    <div>
      <Search searchLogic ={searchLogic}/>
      <AddTransactionForm postFormData ={postFormData}/>
      <TransactionsList transactionList = {transactionList}/>
    </div>
  );
}

export default AccountContainer;
