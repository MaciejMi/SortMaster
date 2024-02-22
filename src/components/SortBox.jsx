import '../assets/scss/SortBox.scss';

const SortBox = ({ title, description, linkText, img, alt, ...props }) => {
	return (
		<div className="box" {...props}>
			<div className="box__left">
				<h3>{title}</h3>
				<p>{description}</p>
				<a className="button">{linkText}</a>
			</div>
			<img src={img} alt={alt} />
		</div>
	);
};

export default SortBox;
