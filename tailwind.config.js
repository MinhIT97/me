// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/**/*.tsx", "./pages/*.tsx", "./pages/*.js", "./component/*.js", "./component/*.jsx", "./component/*.tsx"],
    darkMode: 'class',
    theme: {
        // good to know: add default line height https://tailwindcss.com/docs/font-size#app
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },

            margin: {
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '48px',
            },
            transform: ['hover', 'focus'],
            colors: {
                // custom light-gray tones
                geist: {
                    50: "#fafafa",
                    100: "#eaeaea",
                },
                yellowF: {
                    100: "#e9c46a"
                },
                customTurquoise: {
                    100: "#0bceaf"
                },
                darkCustom: {
                    100: "#202026"
                },
                // custom dark scheme
                dark: {
                    1100: "#212121",
                    1000: "#2B2B2B",
                    900: "#404040",
                    800: "#4D4D4D",
                    700: "#5e5e5e",
                    600: "#676767",
                    500: "#a6a6a6",
                    400: "#CFCFCF",
                    300: "#D9D9D9",
                    200: "#ebebeb",
                    100: "#FFFFFF",
                },
            },
            typography: (theme) => ({
                default: {
                    css: {
                        color: theme("colors.gray.700"),
                        h2: {
                            fontWeight: "700",
                            letterSpacing: theme("letterSpacing.tight"),
                            color: theme("colors.gray.900"),
                        },
                        h3: {
                            fontWeight: "600",
                            color: theme("colors.gray.900"),
                        },
                        "ol li:before": {
                            fontWeight: "600",
                            color: theme("colors.gray.500"),
                        },
                        "ul li:before": {
                            backgroundColor: theme("colors.gray.400"),
                        },
                        code: {
                            color: theme("colors.gray.900"),
                        },
                        a: {
                            color: theme("colors.gray.900"),
                        },
                        pre: {
                            color: theme("colors.gray.200"),
                            backgroundColor: theme("colors.gray.800"),
                        },
                        blockquote: {
                            color: theme("colors.gray.900"),
                            borderLeftColor: theme("colors.gray.200"),
                        },
                    },
                },
            }),
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        }),
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        }
    },
    variants: {
        opacity: ["responsive", "hover", "focus", "disabled"],
        cursor: ["responsive", "hover", "focus", "disabled"],
        backgroundColor: [
            "responsive",
            "hover",
            "focus",
            "active",
            "group-hover",
            "odd",
            "even",
            "dark"
        ],
    },
    // eslint-disable-next-line global-require
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};