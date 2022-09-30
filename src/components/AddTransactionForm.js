import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function AddTransactionForm({TransactionList}) {
  const [transactionList,setTransactionList] = useState(TransactionList);
  // create state to hold the added transaction
  const [date, setDate] =useState('')
  const [description, setDescription] =useState('')
  const [category, setCategory] =useState('')
  const [amount, setAmount] =useState(0)
  const [submittedData, setSubmittedData] =useState(null)

  function handleSubmit(event){
    event.preventDafault();
    const formData = {
      date:date,
      description:description,
      category:category,
      amount:amount
    };
    setSubmittedData(formData);
  // when formData has been updated useEffect to call the function that will post the data to server
  // Add submission to transaction list on the page
  // post the data to db.json
  useEffect(() =>{ 
    setTransactionList([...TransactionList,submittedData])
    fetch('http://localhost:3002/transactions',{
      method:'POST',
      body: JSON.stringify(submittedData),
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    ).then(r => r.json())
    .then(data => {
      let newArray = [...TransactionList];
      newArray.push(data)
      setTransactionList(newArray)
      alert('Your transaction was added successfully!')
      });
    },[submittedData])
    //Clear the fields
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={() =>handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={(e) =>setDate(e.target.value)} value={date}/>
          <input type="text" name="description" placeholder="Description" onChange={(e) =>setDescription(e.target.value)} value={description} />
          <input type="text" name="category" placeholder="Category" onChange={(e) =>setCategory(e.target.value)} value={category} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={(e) =>setAmount(e.target.value)} value={amount} />
        </div>
        <button onClick={handleSubmit}className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
