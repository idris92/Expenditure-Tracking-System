import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {
	const expenses = (expenseData) => {
		const expenseDataInput = {
			...expenseData
		};
		props.onExpenses(expenseDataInput);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onExpensesSubmit={expenses} />
		</div>
	);
};
export default NewExpenses;
