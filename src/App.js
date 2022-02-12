import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES =[
  {id: 4, title: 'Car service', amount: 500.21, date: new Date(2020,1,24)},
  {id: 5, title: 'Phone', amount: 100.33, date: new Date(2021,1,25)}	
  
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);



  const addExpenseHandler = expense => {
    setExpenses(previousExpenses => [expense,...previousExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
      
    </div>
  );
}

export default App;
