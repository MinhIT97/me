import PropTypes from "prop-types";

IconDasboardCard.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
IconDasboardCard.defaultProps = {
    width: 10,
    color: "none",
};

function IconDasboardCard(props) {
    const { width, color } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 30 30" fill={color}>
        <rect x="1" y="1" width="28" height="28" rx="7" fill="#FFFCFC" stroke="#656566" strokeWidth="2"/>
        <path d="M8.5 13V25" stroke="#656566" strokeWidth="2"/>
        <line x1="16" y1="9" x2="16" y2="25" stroke="#656566" strokeWidth="2"/>
        <path d="M23 17L23 24" stroke="#656566" strokeWidth="2"/>
        </svg>
    );
}

export default IconDasboardCard;
