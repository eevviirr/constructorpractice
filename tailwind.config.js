/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gray: "rgba(238, 238, 238, 0.72)",
            },
            boxShadow: {
                md: "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
                inner: "-15px 16px 31px 0px rgba(0, 0, 0, 0.25) inset",
            },
            keyframes: {
                shake: {
                  '0%, 100%': { transform: 'rotate(-1deg)' },
                  '50%': { transform: 'rotate(1deg)' },
                },
              },
            animation: {
                shake: "shake 0.2s infinite;",
            },
            backgroundImage: {
                'bg': "url('/src/assets/bg/bg.png')",

            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "20px",
                sm: "40px",
                lg: "60px",
                xl: "80px",
                "2xl": "100px",
            },
        },
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
        },
        screens: {
            sm: "550px",
            xsm: "420px",
        },
    },
    plugins: [],
};
