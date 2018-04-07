# Automated image optimizer and resizer

A simple gulpfile to automate resizing and optimization images for the web.

## Getting Started

Currently this gulpfile is setup to resize and optimize all images in **./assets/images/home**.
Load that up with some images and run the script. All outputted images will be found in **./images/home**.

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

Place images into home folder - **./assets/images/home**

Run default gulp task.

```
gulp
```
Processed images will output to **./images/home**


## Authors

* **John Meas** [github](https://github.com/johnkmeas)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Ryant Brown https://gist.github.com/ryantbrown/239dfdad465ce4932c81
