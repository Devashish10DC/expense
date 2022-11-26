import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const add=()=>{
    console.log(props.title,"Added");
  }
  
  const Delete =()=>{
    console.log("Delete",props.title)
}
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item h2">{props.title}</div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={add}>add event</button>
      <button onClick={Delete}>Delete Expense</button>
    </div>
  );
}

export default ExpenseItem;
