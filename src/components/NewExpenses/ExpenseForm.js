import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expense-title">Concepto</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            id="expense-title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-amount">Monto</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            id="expense-amount"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-date">Fecha</label>
          <input
            type="date"
            id="expense-date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Agregar gasto</button>
        <button type="button" onClick={props.onCancel}>Volver</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
