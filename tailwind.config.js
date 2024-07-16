/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "green-main": "#22C55E",
                "blue-main": "#010420",
                "grey-main": "#f1f1f1",
                "green-secondary": "#1da367",
            },
            backgroundImage: {
                "icon-gradient": "linear-gradient(to right, #10B981, #1E40AF)", // Customize the gradient as needed
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
