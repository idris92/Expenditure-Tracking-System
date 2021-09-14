import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import Card from '../Card/Card';

const Expenses = (props) => {
	const [ filteredYear, setFilteredYear ] = useState('2019');

	const selectedFilteredYear = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.item.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpenseFilter selected={filteredYear} onChangeFilter={selectedFilteredYear} />
			<ExpensesChart expenses={filteredExpenses} />
			{filteredExpenses.length === 0 ? (
				<p className="message">!Sorry, No record found for this year</p>
			) : (
				filteredExpenses.map((expense) => (
					<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
				))
			)}
		</Card>
	);
};

export default Expenses;
