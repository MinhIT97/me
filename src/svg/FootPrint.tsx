import PropTypes from "prop-types";

FootPrint.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
FootPrint.defaultProps = {
    width: 10,
    color: "white",
};


function FootPrint(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/footprint.png" alt="" />

    );
}

export default FootPrint;
