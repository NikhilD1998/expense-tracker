import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseYear = props.date.getFullYear();
  const expenseDay = props.date.toLocaleString('en-US', {day:'2-digit'});

  return (
    <div className="expense-item">
      <div>
        <div>{expenseMonth}</div>
        <div>{expenseYear}</div>
        <div>{expenseDay}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
