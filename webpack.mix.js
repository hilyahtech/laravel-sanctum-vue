const path = require('path')
const fs = require('fs-extra')
const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '~': path.join(__dirname, './resources/js')
        }
    },
    output: {
        chunkFilename: 'js/[chunkhash].js',
        path: mix.config.hmr ? '/' : path.resolve(__dirname, './public/build')
    }
})

mix.then(() => {
    if (!mix.config.hmr) {
        process.nextTick(() => publishAseets())
    }
})

function publishAseets() {
    const publicDir = path.resolve(__dirname, './public')

    fs.copySync(path.join(publicDir, 'build'), path.join(publicDir))
    fs.removeSync(path.join(publicDir, 'build'))
}