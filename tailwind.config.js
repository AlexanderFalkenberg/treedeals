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
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [require("@tailwindcss/aspect-ratio")]
};
