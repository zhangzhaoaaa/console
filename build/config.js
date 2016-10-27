/**
 * @author xiaojue
 * @date 20161027
 */
var path = require('path');

var commonjs = require("rollup-plugin-commonjs");
var env = require('./env');
var buble = require('rollup-plugin-buble');
var string = require('rollup-plugin-string');
var postcss = require('rollup-plugin-postcss');
var entry = '';

if (['production', 'dev'].indexOf(env) != -1) {
    entry = '../src/index.js';
}

var config = {
    entry: path.join(__dirname, entry),
    moduleName: 'GMP',
    format: 'umd',
    plugins: [
        commonjs(),
        string({
            include:['**/*.html']
        }),
        buble({
            include:['.js']
        }),
        postcss({
            extensions: ['.css']
        })
    ]
};
if (['production', 'dev'].indexOf(env) != -1) {
    module.exports = Object.assign({
        dest: path.join(__dirname, '../dist/console.js')
    }, config);
} else {
    module.exports = config;
}
