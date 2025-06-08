/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                blush: "#FEECEB",
                warmBrown: "#85586F",
                butter: "#FFF7D4",
                teaGreen: "#D5F0C1",
                cozyText: "#3E3232",
            },
            fontFamily: {
                heading: ["Georgia", "serif"],
                body: ["Avenir", "sans-serif"],
            },
        },
    },
    plugins: [],
};
