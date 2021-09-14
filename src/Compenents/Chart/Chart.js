import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
	const expensesDataValue = props.expensesData.map((expenses) => expenses.value);
	const expensesMax = Math.max(...expensesDataValue);
	return (
		<div className="chart">
			{props.expensesData.map((expenses) => (
				<ChartBar key={expenses.label} value={expenses.value} maxValue={expensesMax} label={expenses.label} />
			))}
		</div>
	);
};
export default Chart;
