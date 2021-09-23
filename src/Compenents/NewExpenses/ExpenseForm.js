import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [ enteredTitle, setEnteredTitle ] = useState('');
	const [ enteredAmount, setEnteredAmount ] = useState('');
	const [ enteredDate, setEnteredDate ] = useState('');
	const [ isValidTitle, setIsValidTitle ] = useState(true);
	const [ isValidAmount, setIsValidAmount ] = useState(true);
	const [ isValidDate, setIsValidDate ] = useState(true);

	const titleChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValidTitle(true);
			setEnteredTitle(event.target.value);
		}
	};
	const newAmountHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValidAmount(true);
			setEnteredAmount(event.target.value);
		}
	};
	const dateChangeHandler = (event) => {
		if (event.target.value.toString().trim().length > 0) {
			setIsValidDate(true);
			setEnteredDate(event.target.value);
		}
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};
		// if (enteredTitle.trim().length === 0) {
		// 	setIsValidTitle(false);
		// } else if (enteredAmount.trim().length === 0) {
		// 	setIsValidAmount(false);
		// } else if (enteredDate.date.toString().trim().length === 0) {
		// 	setIsValidDate(false);
		// } else {

		// 	setIsValidTitle(true);
		// 	setIsValidDate(true);
		// 	setIsValidAmount(true);

		// }
		if (enteredTitle.trim().length === 0) {
			setIsValidTitle(false);
		} else if (enteredAmount.trim().length === 0) {
			setIsValidAmount(false);
		} else if (enteredDate.trim().length === 0) {
			setIsValidDate(false);
		} else {
			setIsValidTitle(true);
			setIsValidAmount(true);
			setIsValidDate(true);
			props.onExpensesSubmit(expenseData);
			setEnteredTitle('');
			setEnteredAmount('');
			setEnteredDate('');
		}
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
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={newAmountHandler}
						className={` ${!isValidAmount ? 'incorrect_label' : 'correct_label'}`}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
						className={` ${!isValidDate ? 'incorrect_label' : 'correct_label'}`}
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
