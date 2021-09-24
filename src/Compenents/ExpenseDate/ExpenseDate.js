// import './ExpenseDate.css';

import styled from 'styled-components';

const DivContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 5.5rem;
	height: 5.5rem;
	border: 1px solid #ececec;
	background-color: #2a2a2a;
	color: white;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
`;

const DivDay = styled.div`
	font-size: 0.75rem;
	font-weight: bold;
`;
const DivYear = styled.div`font-size: 0.75rem;`;

const ExpenseDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'long' });
	const year = props.date.getFullYear();
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	return (
		<DivContainer className="expense-date">
			<DivDay className="expense-date__month">{month}</DivDay>
			<DivDay className="expense-date__year">{year}</DivDay>
			<DivYear className="expense-date__day">{day}</DivYear>
		</DivContainer>
	);
};

export default ExpenseDate;
