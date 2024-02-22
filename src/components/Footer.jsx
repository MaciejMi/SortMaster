const Footer = ({ ...props }) => {
	const date = new Date();
	return (
		<footer {...props}>
			<p> &copy; Maciej Michalczyk {date.getFullYear()}</p>
		</footer>
	);
};

export default Footer;
