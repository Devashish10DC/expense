import React, { useState } from "react";
import Card from "../../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpenseChart expenses={filterExpense}/>
        <ExpenseList items={filterExpense} />
      </Card>
    </div>
  );
};
export default Expenses;
