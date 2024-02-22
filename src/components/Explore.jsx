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
					alt="Bubbles in the ocean"></SortBox>
				<SortBox
					title="Selection Sort"
					description="Learn and visualize the Selection Sort algorithm"
					linkText="Explore Selection Sort"
					img={selection}
					alt="A lot of doors"></SortBox>
				<SortBox
					title="Bubble Sort"
					description="Learn and visualize the Bubble Sort algorithm"
					linkText="Explore Bubble Sort"
					img={insert}
					alt="Bubbles in the ocean"></SortBox>
			</div>
		</Section>
	);
};

export default Explore;
