import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.Expenses(expenseData);  
    };

    return <div className="new-expense">
     <ExpenseForm ExpenseData={saveExpenseData}/>
    </div>
};

export default NewExpense;