import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [ enteredTitle, setEnteredTitle ] = useState('');
	const [ enteredAmount, setEnteredAmount ] = useState('');
	const [ enteredDate, setEnteredDate ] = useState('');
	const [ isValidTitle, setIsValidTitle ] = useState(true);
	const [ isValidAmoutn, setIsValidAmount ] = useState(true);
	const [ isValidDate, setIsValidDate ] = useState(true);

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const newAmountHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};
		if (expenseData.title.trim().length === 0) {
			setIsValidTitle(false);
		} else if (expenseData.amount.trim().length === 0) {
			setIsValidAmount(false);
		} else if (expenseData.date.toString().trim().length === 0) {
			setIsValidDate(false);
		}
		props.onExpensesSubmit(expenseData);
		setIsValidTitle(true);
		setIsValidDate(true);
		setIsValidAmount(true);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={enteredTitle}
						className={` ${!isValidTitle ? 'incorrect_label' : 'correct_label'}`}
					/>
					{!isValidTitle ? <h6 className="field_required">incorrect_label</h6> : ''}
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={newAmountHandler} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
