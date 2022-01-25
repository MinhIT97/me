import PropTypes from "prop-types";

IcomChevronDown.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
IcomChevronDown.defaultProps = {
    width: 10,
    color: "white",
};


function IcomChevronDown(props) {
    const { width, color } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={color} height="100%" width={width} viewBox="0 0 14 8" >
            <path d="M13 1L7 6.5L1 1" stroke="#9E9EA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

}

export default IcomChevronDown;