import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
	return (
		<>
			<Header title="Sorting Algotihm Visualizations" className="header">
				<p>
					Explore and learn about various sorting algorithms with our interactive visualizations. From Bubble Sort to
					Quick Sort, we've got you covered.
				</p>
			</Header>
			<main>
				<Outlet></Outlet>
			</main>
			<Footer className="footer" />
		</>
	);
};

export default Layout;
