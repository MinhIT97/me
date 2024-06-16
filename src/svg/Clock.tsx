import PropTypes from "prop-types";

Clock.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Clock.defaultProps = {
    width: 10,
    color: "white",
};


function Clock(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/clock.png" alt="" />

    );
}

export default Clock;
