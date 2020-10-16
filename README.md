# IndraReactNative
IndraReactNative is a mobile version of Indra agent-based modeling system. It utilizes the existing API of Indra to deliver a front-end to mobile users. 

## Tools
* Framework: React Native
* Documentation: Jsdoc
* Continuous Integration: travis


## Setup
* Install XCode and its command line tools
* Make sure node, watchman, and cocoapods is installed
* Install/Update react-native, and install pods; In the project directory, run
```
$npm i
$cd ios && pod install && cd ..
```
to install required node modules and pods

* In the project directory, use `$ react-native run-ios` to build and run the app
