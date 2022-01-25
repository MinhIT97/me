import PropTypes from "prop-types";

IconStore.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
IconStore.defaultProps = {
    width: 10,
    color: "white",
};


function IconStore(props) {
    const { width, color } = props;
    return (
        <svg id="Capa_1" enableBackground="new 0 0 512 512" fill={color}  height="100%" width={width}   viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg">
            <path d="m512 235.271v-73.812l-60-90v-71.459h-392v71.458l-60 90v73.812l30 15v231.73h-30v30h512v-30h-30v-231.729zm-75 3.959-45-22.5v-35.73h90v35.729zm-407-22.5v-35.73h90v35.729l-45 22.5zm357.812-65.73-20-60h61.161l40 60zm-51.623-60 20 60h-85.189v-60zm-95.189 60h-85.188l20-60h65.188zm-116.812 0h-81.16l40-60h61.161zm25.812 30h91v35.661l-45.945 22.596-45.055-22.527zm121 0h91v35.729l-45.055 22.527-45.945-22.595zm-181-151h332v31h-332zm181 391h-151v-90h151zm121 0h-30v30h30v31h-91v-151h91zm60 61h-30c0-34.819 0-128.263 0-181-34.6 0-296.748 0-332 0v150h181v31h-211v-216.729l15 7.5 60-30 59.945 29.973 61.055-30.028 61.055 30.027 59.945-29.972 60 30 15-7.5z" />
            </svg>
    );

}

export default IconStore;
