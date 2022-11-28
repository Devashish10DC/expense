import React,{ useState }  from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const[title, setTitle] = useState(props.title)
  const add=()=>{
    setTitle("updated!")
    console.log(title);
  }
  
  const[amount, setAmount] = useState(props.amount)
  const edit_amount =()=>{
    setAmount("100$")
    console.log(amount)
}
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>{title}</h2>
      <div className="expense-item__price">{amount}</div>
      <button onClick={add}>update title</button>
      <button onClick={edit_amount}>update amount</button>
    </Card>
  );
}

export default ExpenseItem;
