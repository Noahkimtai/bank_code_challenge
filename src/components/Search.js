import React, { useState, useEffect } from "react";

// a function with the search logic will be passed down to the search component from
// AccountContainer
function Search({searchLogic}) {
    // create a state for holding search data
  const [searchDescription,setSearchDescription] = useState('')

  // When search data changes trigger sideeffect
  useEffect(()=>{
    searchLogic(searchDescription)
  },[searchDescription])

  function handleSearch(e){
    e.preventDefault()
    setSearchDescription(e.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions using description"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
