import Section from './Section';
import SortBox from './SortBox';

import bubbles from '../assets/img/bubbles.jpg';
import selection from '../assets/img/selection.jpg';
import insert from '../assets/img/insert.jpg';

const Explore = ({ props }) => {
	return (
		<Section className="section" title="Explore Sorting Algorithms">
			<div className="container">
				<SortBox
					title="Bubble Sort"
					description="Learn and visualize the Bubble Sort algorithm"
					linkText="Explore Bubble Sort"
					img={bubbles}
					to="/bubble-sort"
					alt="Bubbles in the ocean"></SortBox>
				<SortBox
					title="Selection Sort"
					description="Learn and visualize the Selection Sort algorithm"
					linkText="Explore Selection Sort"
					img={selection}
					to="/selection-sort"
					alt="A lot of doors"></SortBox>
				<SortBox
					title="Insertion Sort"
					description="Learn and visualize the Insertion Sort algorithm"
					linkText="Explore Insertion Sort"
					img={insert}
					to="/insertion-sort"
					alt="two people and puzzles"></SortBox>
			</div>
		</Section>
	);
};

export default Explore;
