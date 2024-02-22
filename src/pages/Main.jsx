import '../assets/scss/style.scss';
import Header from '../components/Header';
import Explore from '../components/Explore';

const Main = () => {
	return (
		<>
			<Header title="Sorting Algotihm Visualizations" className="header">
				<p>
					Explore and learn about various sorting algorithms with our interactive visualizations. From Bubble Sort to
					Quick Sort, we've got you covered.
				</p>
			</Header>
			<main>
				<Explore />
			</main>
		</>
	);
};

export default Main;
