import PropTypes from "prop-types";

IconLogout.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
IconLogout.defaultProps = {
    width: 10,
    color: "white",
};


function IconLogout(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/svg/logout.png" alt="" />

    );
}

export default IconLogout;
