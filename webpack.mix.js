const mix = require("laravel-mix");
const path = require("path");
const cssImport = require("postcss-import");
const cssNesting = require("postcss-nesting");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [
        // prettier-ignore
        cssImport(),
        cssNesting(),
        require("tailwindcss")
    ])
    .alias({
        "@": path.resolve("resources/js"),
        ziggy: path.resolve("vendor/tightenco/ziggy/dist/vue")
    })
    .webpackConfig({
        output: {
            chunkFilename: "js/[name].js?id=[chunkhash]"
        }
    });

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps(false, "source-map").browserSync("treedeals.test");
}
