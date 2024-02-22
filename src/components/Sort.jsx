import Section from './Section';
import '../assets/scss/Sort.scss';
import { useState } from 'react';

const bubbleSort = (array, step) => {
	const newArray = array.slice();
	let swapped = false;
	for (let i = 0; i < newArray.length; i++) {
		for (let j = 0; j < newArray.length - i - 1; j++) {
			if (newArray[j] > newArray[j + 1]) {
				let temp = newArray[j];
				newArray[j] = newArray[j + 1];
				newArray[j + 1] = temp;
				if (step) return newArray;
			}
		}
		if (!swapped) break;
	}
	return newArray;
};

const Sort = ({ title, description, type }) => {
	const [numbers, setNumbers] = useState([]);
	const [enteredNumber, setEnteredNumber] = useState('');

	const addNumber = () => {
		if (enteredNumber !== '') {
			const newArray = [...numbers, parseInt(enteredNumber)];
			setNumbers(newArray);
			setEnteredNumber('');
		}
	};

	const resetNumbers = () => {
		setNumbers([]);
	};

	const nextStep = () => {
		const sortedArray = bubbleSort(numbers, true);
		setNumbers(sortedArray);
	};

	return (
		<Section className="section sort" title={title}>
			<p>{description}</p>
			<div className="sort-visualization">
				<h4>Interactive {title}</h4>
				<input
					type="number"
					placeholder="Enter numbers"
					value={enteredNumber}
					onChange={event => setEnteredNumber(event.target.value)}
				/>
				<div className="board">
					{numbers.map((data, index) => (
						<p key={index}>{data}</p>
					))}
				</div>
				<div className="buttons">
					<button className="button" onClick={addNumber}>
						Add
					</button>
					<button className="button" onClick={nextStep}>
						Next Step
					</button>
					<button className="button" onClick={() => setNumbers(bubbleSort(numbers))}>
						Sort
					</button>
					<button className="button" onClick={resetNumbers}>
						Reset
					</button>
				</div>
			</div>
		</Section>
	);
};

export default Sort;
