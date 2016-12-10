const path = require('path'),
    merge = require('webpack-merge'),
    common = require('./config/common'),
    dev = require('./config/dev'),
    prod = require('./config/prod');

let TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'dev') {
    module.exports = merge(common, dev);
}

if (TARGET === 'build') {
    module.exports = merge(common, prod);
}
