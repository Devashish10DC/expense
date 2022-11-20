import './ExpenseItem.css'

const ExpenseDetails = (pros) => {
    return (<div className="expense-item">
        <div>{pros.date.toISOString()}</div>
        <div className="expense-item__price">${pros.amount}</div>
    </div>)
}

export default ExpenseDetails;