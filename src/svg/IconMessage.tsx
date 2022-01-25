import PropTypes from "prop-types";

IconMessage.propTypes = {
    width: PropTypes.number,
    color : PropTypes.string,
};
IconMessage.defaultProps = {
    width: 10,
    color:"white",
};


function IconMessage(props) {
    const { width ,color } = props;
    return (
        <svg fill={color}  height="100%" width={width} viewBox="-23 -21 682 682.66669"  xmlns="http://www.w3.org/2000/svg">
            <path d="m317.730469 0c-175.386719 0-317.5625 132.65625-317.5625 296.292969 0 92.660156 45.585937 175.394531 116.972656 229.722656v113.984375l106.574219-60.589844c29.714844 8.558594 61.289062 13.183594 94.015625 13.183594 175.394531 0 317.558593-132.667969 317.558593-296.296875 0-163.640625-142.164062-296.296875-317.558593-296.296875zm32.125 396.46875-81.4375-85.511719-155.859375 85.511719 171.253906-181.328125 82.199219 84.019531 154.128906-84.019531zm0 0"/>
        </svg>
    );

}

export default IconMessage;
