import PropTypes from "prop-types";

Gender.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Gender.defaultProps = {
    width: 10,
    color: "white",
};


function Gender(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/equality.png" alt="" />

    );
}

export default Gender;
