import React,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm =() => {
    const [enteredtitle, setEnteredtitle] = useState();
    const [enteredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnteredDate] = useState();
    
    //const [userInput, setUserInput] = useState({
      //  enteredtitle: '',
      //  enteredAmount: '',
      //  enteredDate: ''
    //});

    const changetitle = (event) =>{
        setEnteredtitle(event.target.value)
        //setUserInput({
        //    ...userInput,
        //    enteredtitle: event.target.value,
        //});
    };

    const changeAmount = (event) =>{
        setEnteredAmount(event.target.value)
        //setUserInput({
          //  ...userInput,
          //  enteredAmount: event.target.value,
        //});
    };

    const changeDate = (event) =>{
        setEnteredDate(event.target.value)
       // setUserInput({
         //   ...userInput,
        //enteredDate: event.target.value,
        //});
    };

    const submit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredtitle,
            amount: enteredAmount,
            Date: new Date(enteredDate)
        };
        console.log(expenseData);
    }

    return <form onSubmit={submit}>
        <div className='new-expense__control'>
        <div className='new-expense__control'>
         <label>Title</label>
         <input type="text" onChange={changetitle} />    
        </div>
        <div className='new-expense__control'>
         <label>Amount</label>
         <input type="number" min="0.01" step="0.01" onChange={changeAmount} />    
        </div> 
        <div className='new-expense__control'>
         <label>Date</label>
         <input type="date" min="2020-01-01" max="2022-12-31" onChange={changeDate} />    
        </div>    
        </div>
        <div className="new-expense__action">
         <button type='submit'>Add Expense</button>
         </div> 
    </form>

};

export default ExpenseForm;
