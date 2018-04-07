/** 
 * Make sure Graphicsmagick is installed on your system
 * osx: brew install graphicsmagick
 * ubuntu: apt-get install graphicsmagick
 * 
 * 
 **/

var gulp = require('gulp');
var imageresize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');

var paths = {
    folder: 'images/',
    src: './assets/', 
    dest: '../image-mass-crop/'
}

// Array of groups
// Finds src at ./assets/images/<folder-name>
var home_images = [
    { 
        folder: 'homes', 
        width: 2400, 
        height: 1400, 
        crop: true 
    }
];


// Optimize and resize images in folders and outputs to ./images
gulp.task('default', function () {
 
    home_images.forEach(function(type){
        
        var resize_settings = {
            width: type.width,
            crop: type.crop,
            upscale : false
        }
        
        if (type.hasOwnProperty("height")) {
            resize_settings.height = type.height
        }

        gulp
        .src(paths.src + paths.folder + type.folder + '/**/*')
        .pipe(imageresize(resize_settings))
        .pipe(imagemin({
            progressive: true,
            // set this if you are using svg images
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(rename({
            suffix: "@2x",
            extname: ".jpg"
        }))
        .pipe(gulp.dest(paths.dest + paths.folder + type.folder));
    });
});

