import PropTypes from "prop-types";

IconActivity.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
IconActivity.defaultProps = {
    width: 10,
    color: "white",
};


function IconActivity(props) {
    const { width, color } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 30 30" fill="none">
            <rect x="1" y="1" width="28" height="28" rx="7" fill="#FFFCFC" stroke="#656566" strokeWidth="2" />
            <path d="M8 20L12 15L18 17L22.5 11" stroke="#656566" strokeWidth="2" />
        </svg>
    );

}

export default IconActivity;