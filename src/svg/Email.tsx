import PropTypes from "prop-types";

Email.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Email.defaultProps = {
    width: 10,
    color: "white",
};


function Email(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/email.png" alt="" />

    );
}

export default Email;
