import PropTypes from "prop-types";

Star.propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
};
Star.defaultProps = {
    width: 10,
    color: "white",
};


function Star(props) {
    const { width, color } = props;
    return (
        <div  className="transform duration-500 ease-in-out transition hover:scale-50 hover:rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill={color} height="100%" width={width} viewBox="0 0 33 32" >
                <g filter="url(#filter0_d)">
                    <path d="M15.3148 3.92705C15.6141 3.00574 16.9176 3.00574 17.2169 3.92705L19.409 10.6738C19.5429 11.0858 19.9269 11.3647 20.3601 11.3647H27.454C28.4227 11.3647 28.8255 12.6044 28.0418 13.1738L22.3027 17.3435C21.9522 17.5981 21.8056 18.0495 21.9394 18.4615L24.1316 25.2082C24.4309 26.1295 23.3764 26.8956 22.5927 26.3262L16.8536 22.1565C16.5031 21.9019 16.0286 21.9019 15.6781 22.1565L9.93897 26.3262C9.15525 26.8956 8.10077 26.1295 8.40013 25.2082L10.5923 18.4615C10.7261 18.0495 10.5795 17.5981 10.229 17.3435L4.4899 13.1738C3.70619 12.6044 4.10896 11.3647 5.07768 11.3647H12.1716C12.6048 11.3647 12.9888 11.0858 13.1227 10.6738L15.3148 3.92705Z" fill="#E9C46A" />
                    <path d="M15.3148 3.92705C15.6141 3.00574 16.9176 3.00574 17.2169 3.92705L19.409 10.6738C19.5429 11.0858 19.9269 11.3647 20.3601 11.3647H27.454C28.4227 11.3647 28.8255 12.6044 28.0418 13.1738L22.3027 17.3435C21.9522 17.5981 21.8056 18.0495 21.9394 18.4615L24.1316 25.2082C24.4309 26.1295 23.3764 26.8956 22.5927 26.3262L16.8536 22.1565C16.5031 21.9019 16.0286 21.9019 15.6781 22.1565L9.93897 26.3262C9.15525 26.8956 8.10077 26.1295 8.40013 25.2082L10.5923 18.4615C10.7261 18.0495 10.5795 17.5981 10.229 17.3435L4.4899 13.1738C3.70619 12.6044 4.10896 11.3647 5.07768 11.3647H12.1716C12.6048 11.3647 12.9888 11.0858 13.1227 10.6738L15.3148 3.92705Z" fill="url(#paint0_linear)" />
                    <path d="M16.9791 4.0043L19.1713 10.751C19.3386 11.266 19.8186 11.6147 20.3601 11.6147H27.454C28.1806 11.6147 28.4826 12.5445 27.8949 12.9715L22.1558 17.1412C21.7176 17.4595 21.5343 18.0237 21.7017 18.5387L23.8938 25.2855C24.1183 25.9764 23.3275 26.551 22.7397 26.124L17.0006 21.9543C16.5625 21.636 15.9692 21.636 15.5311 21.9543L9.79202 26.124C9.20424 26.551 8.41338 25.9764 8.63789 25.2855L10.83 18.5387C10.9974 18.0237 10.814 17.4595 10.3759 17.1412L4.63685 12.9715C4.04906 12.5445 4.35114 11.6147 5.07768 11.6147H12.1716C12.7131 11.6147 13.1931 11.266 13.3604 10.751L15.5526 4.00431C15.7771 3.31332 16.7546 3.31332 16.9791 4.0043Z" stroke="#B4B4B4" strokeWidth="0.5" />
                </g>
                <defs>
                    <filter id="filter0_d" x="0.0756836" y="0.236084" width="32.3802" height="31.2857" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear" x1="-348.602" y1="1.3383e-05" x2="-310.102" y2="-5.99999" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFBE0B" />
                        <stop offset="0.03125" stopColor="white" stopOpacity="0" />
                        <stop offset="0.15625" stopColor="#F9E2A5" stopOpacity="0.616338" />
                        <stop offset="0.182292" stopColor="#F9E2A5" stopOpacity="0.62" />
                        <stop offset="0.328125" stopColor="#FFE9AD" stopOpacity="0.224508" />
                        <stop offset="0.463542" stopColor="#F9E2A5" stopOpacity="0.62" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

    );

}

export default Star;
