
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem=({ date, amount, title })=> {
  const [newTitle,setNewTitle]=useState(title);
  const clickHandler = ()=>{
      console.log("newTitle value : "+ newTitle);
      setNewTitle('Updated');
      console.log('Clicked');
      console.log("newTitle value : "+ newTitle);
    };
    
    const [newAmount,setNewAmount]=useState(amount);
    const clickHandlerInc = ()=>{
      setNewAmount(newAmount+10);
    };


    const clickHandlerDec = ()=>{
      setNewAmount(newAmount-10);
    };
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <div>{newTitle}</div>
        <div className="expense-item__price">${newAmount.toFixed(2)}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandlerInc}>+</button>
      <button onClick={clickHandlerDec}>-</button>      
    </Card>
  );
}

export default ExpenseItem;