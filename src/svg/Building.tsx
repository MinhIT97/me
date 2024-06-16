import PropTypes from "prop-types";

Building.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Building.defaultProps = {
    width: 10,
    color: "white",
};


function Building(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/office-building.png" alt="" />

    );
}

export default Building;
