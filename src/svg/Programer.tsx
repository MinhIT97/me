import PropTypes from "prop-types";

Programer.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Programer.defaultProps = {
    width: 10,
    color: "white",
};


function Programer(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/programmer.png" alt="" />

    );
}

export default Programer;
