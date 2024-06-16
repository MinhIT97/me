import PropTypes from "prop-types";

Skill.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Skill.defaultProps = {
    width: 10,
    color: "white",
};


function Skill(props) {
    const { width, color } = props;
    return (
        <img width={width} src="/skill.png" alt="" />

    );
}

export default Skill;
