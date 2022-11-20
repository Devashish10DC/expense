import './ExpenseItem.css';

const ExpenseItem = (pros) => {
    return (<div className="expense-item">
        <div>{pros.date.toISOString()}</div>
        <div className="expense-item h2">{pros.title}</div>
        <div className="expense-item__price">${pros.amount}</div>
        <div className="expense-item__locationofexp">{pros.title}</div>
    </div>)
}


export default ExpenseItem;