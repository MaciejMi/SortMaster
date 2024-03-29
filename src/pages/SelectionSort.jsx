import Sort from '../components/Sort';

const SelectionSort = () => {
	return (
		<Sort
			title="Selection Sort Visualization"
			description="Selection sort is an effective and efficient sort algorithm based on comparison operations. It adds one element in each iteration. You need to select the smallest element in the array and move it to the beginning of the array by swapping with the front element."
			type="selection"
		/>
	);
};

export default SelectionSort;
