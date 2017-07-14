![Boilerplate](/build/screenshot.png)
> A boilerplate for Electron using React and Webpack. Which also contains components and a basic layout to quick-start creating an application.

[![Code Climate](https://codeclimate.com/github/taurgis/electron-react-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/taurgis/electron-react-boilerplate)
[![Build Status](https://travis-ci.org/taurgis/electron-react-boilerplate.svg?branch=master)](https://travis-ci.org/taurgis/electron-react-boilerplate)
[![Build status](https://ci.appveyor.com/api/projects/status/github/taurgis/electron-react-boilerplate)](https://ci.appveyor.com/project/taurgis/electron-react-boilerplate/branch/master)

## Under Development

Currently this boilerplate is still under development and is also my personal "learning platform" for both Electron, Webpack and React. So take into consideration that not all code will be optimized and there will be structural changes constantly as I learn the ropes.

### TO-DO
  - [x] Runnable app
  - [x] Running Webpack
  - [X] Automatic documentation generation using Webpack
  - [x] Build for Linux (DEB & RPM), Windows & Mac
  - [x] Testing system in place
  - [x] Splash screen for loading (just for show)
  - [x] Styled left menu
  - [x] Styled top menu
  - [x] Card components  
  - [x] Card-panel component
  - [ ] Button components
  - [ ] Graphs
  - [ ] Forms
  - [X] Multiple pages

### Install Dependencies & Run

``` bash
$ npm install
$ npm run start
```

## Package & Release

### Install Dependencies

You will need some extra dependencies to build for different platforms on a single platform. Please refer to [this guide](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build) and install required software for your platform.

### Building libraries before releasing

``` bash
$ npm run build
```

### Package

To package the app and make installers for all supported platforms:

``` bash
$ npm run release
```
This may take a while depending on how fast your computer is. All apps and installers will be in `app` directory.

To package only for the current platform:

``` bash
$ npm run package:current
```

Or for a specific platform:
``` bash
$ npm run package:mac
$ npm run package:win
$ npm run package:linux
```

## Contributors

### Creation
 * Thomas Theunen  ([www.thomastheunen.eu](https://www.thomastheunen.eu))

Project based on an Alpha release of [buttercup](https://buttercup.pw)

## License

Released under [GNU/GPL Version 3](LICENSE)
