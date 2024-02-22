import { Link } from 'react-router-dom';
import '../assets/scss/SortBox.scss';

const SortBox = ({ title, description, linkText, to, img, alt, ...props }) => {
	return (
		<div className="box" {...props}>
			<div className="box__left">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link to={to} className="button">
					{linkText}
				</Link>
			</div>
			<img src={img} alt={alt} />
		</div>
	);
};

export default SortBox;
