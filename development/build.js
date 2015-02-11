//Use this file for building a minified deployment version using r.js
//MSDOS command
//r.js.cmd -o build.js
({
    appDir: './',
    baseUrl: './js',
    mainConfigFile: './js/main.js',
    dir: "../dist",
    modules: [
        {
            name: 'main'
        }
    ],
    optimize: "uglify2",
    uglify2: {
        output: {
            beautify: false
        },
        compress: {
            drop_console: true
        },
        warnings: true,
        mangle: false
    },
    removeCombined: true
})