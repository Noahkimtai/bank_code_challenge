import React, { useState } from "react";
import Transaction from "./Transaction";

function AddTransactionForm() {
  // create an object to hold the added transaction
  const [date, setDate] =useState('')
  const [description, setDescription] =useState('')
  const [category, setCategory] =useState('')
  const [amount, setAmount] =useState(0)
  const [submittedData, setSubmittedData] =useState([])

  function handleSubmit(e){
    e.preventDafault()
    const formData = {
      date:date,
      description:description,
      category:category,
      amount:amount
    }
    const transactionArray =[...submittedData, formData]
    setSubmittedData(transactionArray);

    // Add submission to transaction list on the page
    /* transactionArray.map((transactionEl) =><Transaction transaction ={transactionEl}/>) */
    alert(transactionArray.date)
    // post the data to db.json
    fetch('http://localhost:3002/transactions',{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transactionArray)
    })
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
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={(e) => handleSubmit(e)}>
        <div className="inline fields">
          <input type="date" name="date" onChange={e =>handleDateChange} value={date}/>
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
