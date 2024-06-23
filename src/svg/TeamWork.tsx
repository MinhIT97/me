import PropTypes from "prop-types";

TeamWork.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
TeamWork.defaultProps = {
    width: 10,
    color: "white",
};


function TeamWork(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/teamwork.png" alt="" />

    );
}

export default TeamWork;
