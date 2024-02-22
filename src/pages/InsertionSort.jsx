import Sort from '../components/Sort';

const InsertionSort = () => {
	return (
		<Sort
			title="Insertion Sort Visualization"
			description="To sort an array of size N in ascending order iterate over the array and compare the current element (key) to its predecessor, if the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
            "
			type="insertion"
		/>
	);
};

export default InsertionSort;
