    const ExpenseDate = (pros) => {
      const month = pros.date.toLocalString('en-US', { month: 'long'});
      const day =  pros.date.toLocalString('en-US', { day: '2-digit'});
      const year = pros.date.getFullYear();
    
      return(
        <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
        </div>
      );
    }

    export default ExpenseDate;