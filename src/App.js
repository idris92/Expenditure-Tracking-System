// import ExpenseGroupItem from './ExpenseItem/ExpenseItem'
import { useState } from 'react';
import Expenses from './Compenents/Expenses/Expenses.js';
import NewExpenses from '../src/Compenents/NewExpenses/NewExpenses';
import './App.css';

const expenses = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14)
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28)
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12)
	}
];

function App() {
	const [ expensesUpdate, setExpensesUpdate ] = useState(expenses);

	const expenseSave = (expenseDataInput) => {
		setExpensesUpdate((expenses) => {
			return [ expenseDataInput, ...expenses ];
		});
		// console.log('this is from app' + { ...expenseDataInput });
	};
	return (
		<div>
			<NewExpenses onExpenses={expenseSave} />
			<Expenses item={expensesUpdate} />
		</div>
	);
}

export default App;
