const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue"
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ["recoleta-semibold", "system-ui", "sans-serif"]
        },
        colors: {
            gray: colors.trueGray,
            green: colors.emerald,
            yellow: colors.yellow,
            blue: colors.blue,
            red: colors.red,
            transparent: "transparent",
            white: "white"
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp")
    ]
};
