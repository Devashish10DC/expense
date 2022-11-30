import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expenseContent = <p>Only single Expense here. Please add more...</p>;

  if (filterExpense.length > 1){
    expenseContent = filterExpense.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )); 
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
        {expenseContent}
      </Card>
    </div>
  );
};
export default Expenses;
