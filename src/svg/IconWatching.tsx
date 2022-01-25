import PropTypes from "prop-types";

IconWatching.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
IconWatching.defaultProps = {
    width: 10,
    color: "white",
};


function IconWatching(props) {
    const { width, color } = props;
    return (
        <svg fill={color} height="100%" width={width} version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 512 512" >
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" y1="478" x2="256" y2="38" gradientTransform="matrix(1 0 0 -1 0 514)">
                <stop offset="0" style={{ stopColor: color }} />
                <stop offset="1" style={{ stopColor: color }} />
            </linearGradient>
            <path style={{ fill: "url(#SVGID_1_)" }} d="M452,36H60C26.916,36,0,62.916,0,96v240c0,33.084,26.916,60,60,60h176v40H132v40h248v-40H276
       v-40h176c33.084,0,60-26.916,60-60V96C512,62.916,485.084,36,452,36z M472,336c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20
       V96c0-11.028,8.972-20,20-20h392c11.028,0,20,8.972,20,20V336z M197,316.628l163.277-99.603L197,116.511V316.628z M237,188.107
       l46.723,28.763L237,245.372V188.107z"/>
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

export default IconWatching;
