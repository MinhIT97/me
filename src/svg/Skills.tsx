import PropTypes from "prop-types";

Skills.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Skills.defaultProps = {
    width: 10,
    color: "white",
};


function Skills(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/skill.png" alt="" />

    );
}

export default Skills;
