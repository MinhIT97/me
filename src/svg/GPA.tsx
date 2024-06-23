import PropTypes from "prop-types";

GPA.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
GPA.defaultProps = {
    width: 10,
    color: "white",
};


function GPA(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/gpa.png" alt="" />

    );
}

export default GPA;
