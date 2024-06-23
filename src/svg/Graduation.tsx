import PropTypes from "prop-types";

Graduation.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Graduation.defaultProps = {
    width: 10,
    color: "white",
};


function Graduation(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/graduation.png" alt="" />

    );
}

export default Graduation;
