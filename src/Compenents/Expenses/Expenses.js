import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../Card/Card';

const Expenses = (props) => {
	const [ filteredYear, setFilteredYear ] = useState('2019');

	const selectedFilteredYear = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpenseFilter selected={filteredYear} onChangeFilter={selectedFilteredYear} />
			{props.item.map((expense) => (
				<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
			))}
		</Card>
	);
};

export default Expenses;
