// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/**/*.tsx", "./pages/*.tsx", "./pages/*.js", "./component/*.js", "./component/*.jsx", "./component/*.tsx", './component/*/*.tsx', './component/**/*.tsx', './component/**/*.jsx'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                heading: ["Space Grotesk", "Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // New dark palette
                portfolio: {
                    bg: '#07070f',
                    surface: '#12121f',
                    card: '#1a1a2e',
                    accent: '#6c63ff',
                    cyan: '#00d4ff',
                    pink: '#ff6584',
                    green: '#00e5a0',
                },
                // Keep legacy colors for backward compat
                geist: {
                    50: "#fafafa",
                    100: "#eaeaea",
                },
                yellowF: {
                    100: "#e9c46a"
                },
                customTurquoise: {
                    100: "#6c63ff"
                },
                darkCustom: {
                    100: "#07070f"
                },
                dark: {
                    1100: "#07070f",
                    1000: "#0d0d1a",
                    900: "#12121f",
                    800: "#1a1a2e",
                    700: "#2a2a40",
                    600: "#3a3a55",
                    500: "#64748b",
                    400: "#94a3b8",
                    300: "#cbd5e1",
                    200: "#e2e8f0",
                    100: "#f8fafc",
                },
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #6c63ff 0%, #00d4ff 100%)',
                'gradient-hero': 'linear-gradient(135deg, #07070f 0%, #0d0d1a 50%, #130a2e 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%)',
                'gradient-warm': 'linear-gradient(135deg, #ff6584 0%, #ff9f43 100%)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
                'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
                'float': 'float 4s ease-in-out infinite',
                'float-reverse': 'floatReverse 5s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
                'blink': 'blink 1s step-end infinite',
            },
            keyframes: {
                fadeInUp: {
                    from: { opacity: 0, transform: 'translateY(30px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                fadeInLeft: {
                    from: { opacity: 0, transform: 'translateX(-30px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                floatReverse: {
                    '0%, 100%': { transform: 'translateY(-8px)' },
                    '50%': { transform: 'translateY(8px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(108, 99, 255, 0.6)' },
                },
                blink: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                },
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                'glow': '0 0 40px rgba(108, 99, 255, 0.2)',
                'glow-strong': '0 0 60px rgba(108, 99, 255, 0.4)',
                'glow-cyan': '0 0 40px rgba(0, 212, 255, 0.2)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                none: 'none',
            },
            margin: {
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '48px',
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '12px',
                lg: '20px',
                xl: '40px',
            },
            typography: (theme) => ({
                default: {
                    css: {
                        color: theme("colors.gray.300"),
                        h2: {
                            fontWeight: "700",
                            color: theme("colors.gray.100"),
                        },
                        h3: {
                            fontWeight: "600",
                            color: theme("colors.gray.100"),
                        },
                        a: {
                            color: '#6c63ff',
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {
            opacity: ["responsive", "hover", "focus", "disabled"],
            cursor: ["responsive", "hover", "focus", "disabled"],
            backgroundColor: ["responsive", "hover", "focus", "active", "group-hover", "dark"],
            transform: ['hover', 'focus', 'group-hover'],
            scale: ['hover', 'focus', 'group-hover'],
            translate: ['hover', 'focus', 'group-hover'],
        },
    },
    // eslint-disable-next-line global-require
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};