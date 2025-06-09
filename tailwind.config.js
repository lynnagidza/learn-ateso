/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                blush: "#fdf3f3",
                warmBrown: "#8b5e3c",
                butter: "#FFF7D4",
                butterYellow: "#ffedb2",
                teaGreen: "#D5F0C1",
                cozyText: "#4b3832",
            },
            fontFamily: {
                heading: ["Georgia", "serif"],
                body: ["Avenir", "sans-serif"],
            },
        },
    },
    plugins: [],
};
