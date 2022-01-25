import PropTypes from "prop-types";

FlagVietNam.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
FlagVietNam.defaultProps = {
    width: 10,
    color: "white",
};


function FlagVietNam(props) {
    const { width, color } = props;
    return (
        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="25" height="16" rx="2" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use transform="translate(0 -0.0173841) scale(0.00662252 0.0103477)" />
                </pattern>
                <image id="image0" width="151" height="100" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>
    );

}

export default FlagVietNam;
