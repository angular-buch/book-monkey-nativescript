# BookMonkey Mobile (NativeScript)

This app was directly derived from this repo:
https://github.com/book-monkey2-build/iteration-3-http
Only the markup had to be substantially changed. The components and modules are almost the same and services are entirely untouched!

## Setup

Clone

Install nativescript:

```
npm install -g nativescript
```

Then run 
`tns platform add android` OR
`tns platform add ios`

and then `npm install`

All set! You can now run the app using

* `tns run <PLATFORM>` (which requires a connected device) or 
* `tns livesync <PLATFORM> --watch` (which requires a connected device) or 
* `tns run <PLATFORM> --emulator` (which requires a running emulator)
