import "./App.css";
import ExpenseDate from "./components/Expenses/ExpenseDate";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App=()=> {
  const expenses = [
    { title: "Car Insurance", amount: 294.45, date: new Date(2021, 2, 28) },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2021, 2, 12) },
    { title: "Iphone 16", amount: 999.99, date: new Date(2022, 2, 28) },
    { title: "Dolce Gabbana Sweatshirt", amount: 1570.64, date: new Date(2021, 1, 16) },
    { title: "Louis Vuitton White Shirt", amount: 1240.5, date: new Date(2023, 1, 16) },
  ];

  return (
   <div>
    <NewExpense/>
    <Expenses expenses={expenses}></Expenses>
   </div>

  );
}

export default App;