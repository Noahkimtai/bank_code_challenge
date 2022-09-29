import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function AddTransactionForm({TransactionList}) {

  const [transactionList,setTransactionList] = useState(TransactionList);
  // create an object to hold the added transaction
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
    //Clear the fields
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
};


  function handleDateChange(e){
    setDate(e.target.value);
  }
  function handleDescriptionChange(e){
    setDescription(e.target.value);
  }
  
  function handleCategoryChange(e){
    setCategory(e.target.value);
  }
  function handleAmountChange(e){
    setAmount(e.target.value);
  }
  // when formData has been updated useEffect to call the function that will post the data to server
  useEffect(() =>{
    //handle formdata 
  // Add submission to transaction list on the page
    /* transactionArray.map((transactionEl) =><Transaction transaction ={transactionEl}/>) */
    // post the data to db.json
  function postFormData(submitedData){  
    fetch('http://localhost:3002/transactions',{
      method:'POST',
      body: JSON.stringify(submitedData),
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
  },[submittedData])
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={() =>handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleDateChange} value={date}/>
          <input type="text" name="description" placeholder="Description" onChange={handleDescriptionChange} value={description} />
          <input type="text" name="category" placeholder="Category" onChange={handleCategoryChange} value={category} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleAmountChange} value={amount} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
