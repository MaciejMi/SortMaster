import '../assets/scss/Header.scss';

const Header = ({ title, children, ...props }) => {
	return (
		<header {...props}>
			<h1>
				Sorting <span>Algorithm</span> Visualizations
			</h1>
			{children}
		</header>
	);
};

export default Header;
