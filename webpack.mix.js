let mix = require('laravel-mix');

mix.sass('statics/styles/entry.sass', 'dist').options({processCssUrls: false});