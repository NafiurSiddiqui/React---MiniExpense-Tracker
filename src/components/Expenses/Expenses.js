// import React, { useState } from 'react';
// import Card from '../UI/Card';
// import ExpenseItem from './ExpenseItem';
// import ExpensesFilter from './ExpensesFilter';

// function Expenses(props) {
//  // use state for year
//  const [filteredYear, SetFilteredYear] = useState('2020');
//  // write handler function
//  const filterChangeHandler = (selectedYear) => {
//   SetFilteredYear(selectedYear);
//  };
//  // write filter function
//  const filteredExpense = props.items.filter((expense) => {
//   return expense.date.getFullYear().toString === filteredYear;
//  });

//  return (
//   <div>
//    <Card className="expenses">
//     <ExpensesFilter
//      selected={filteredYear}
//      onChangeFilter={filterChangeHandler}
//     />

//     {filteredExpense.map((expense) => (
//      <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//      />
//     ))}
//    </Card>
//    ;
//   </div>
//  );
// }

// export default Expenses;

import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
 const [filteredYear, setFilteredYear] = useState('2020');

 const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
 };

 const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
 });

 return (
  <li>
   <Card className="expenses">
    <ExpensesFilter
     selected={filteredYear}
     onChangeFilter={filterChangeHandler}
    />
    <ExpensesChart expense={filteredExpenses} />
    <ExpensesList items={filteredExpenses} />
   </Card>
  </li>
 );
};

export default Expenses;
