# Automated image optimizer and resizer

A simple gulpfile to automate resizing and optimization images for the web.

## Getting Started

Currently this gulpfile is setup to resize and optimize all images in **./assets/images/large**.
Load that up with some images and run the script. All outputted images will be found in **./images/large**.

Feel free to created additional folders inside of the **./assets/images/** folder for your needs and modify gulpfile.

You will need a computer with Node installed.

### Prerequisites

You will need these software installed on your system:
* Graphicsmagick
* Gulp

Install on Mac

```
brew install graphicsmagick
```
```
npm install -g gulp
```

### Installation

Install gulp plugins.

```
npm install
```

## Usage

Place images into home folder - **./assets/images/large**

Run default gulp task.

```
gulp
```
Processed images will output to **./images/large**

If output folder doesn't exist, then it will be automatically generated.

## Additional Resources and Info

**npm packages used**

* [gulp](https://gulpjs.com/)
* [gulp-image-resize](https://github.com/scalableminds/gulp-image-resize)
* [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
* [gulp-rename](https://github.com/hparra/gulp-rename)
* [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant)


## Authors

* **John Meas** [github](https://github.com/johnkmeas)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Ryant Brown https://gist.github.com/ryantbrown/239dfdad465ce4932c81
