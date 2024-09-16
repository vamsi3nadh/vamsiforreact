import "./Expence.css";

import { useState } from "react";

const ExpencesForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const updateState = (list) => {
    setList((prevState) => [...prevState, list]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const listItem = {
      description,
      amount,
      date,
    };
    updateState(listItem);
  };

  getListItems = () => {
    return <h1>List Items</h1>;
  };

  return (
    <div>
      <h1>Expence Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="sub-container">
          <label htmlFor="desc">Description</label>
          <input
            onChange={handleChange}
            id="desc"
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="sub-container">
          <label htmlFor="desc">Amount</label>
          <input
            onChange={handleAmount}
            id="desc"
            type="text"
            placeholder="Amount"
          />
        </div>
        <div className="sub-container">
          <label htmlFor="desc">Date</label>
          <input onChange={handleDate} id="desc" type="date" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ul>{getListItems()}</ul>
    </div>
  );
};

export default ExpencesForm;
