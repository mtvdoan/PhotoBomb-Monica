/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/container-queries"),
        require("flowbite/plugin"),
        require("tw-elements/dist/plugin"),
    ],
    safelist: [
        "animate-[fade-in_1s_ease-in-out]",
        "animate-[fade-in-down_1s_ease-in-out]",
    ],
};
