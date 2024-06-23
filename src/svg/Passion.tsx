import PropTypes from "prop-types";

Passion.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Passion.defaultProps = {
    width: 10,
    color: "white",
};


function Passion(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/passion.png" alt="" />

    );
}

export default Passion;
