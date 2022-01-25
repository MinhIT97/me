import PropTypes from "prop-types";

IconDropDown.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
IconDropDown.defaultProps = {
    width: 10,
    color: "white",
};


function IconDropDown(props) {
    const { width, color } = props;
    return (
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            fill={color} height="100%" width={width} viewBox="0 0 255 255"  >
            <g>
                <g id="arrow-drop-down">
                    <polygon points="0,63.75 127.5,191.25 255,63.75" />
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>
    );

}

export default IconDropDown;
