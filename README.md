# BookMonkey Mobile (NativeScript)

This app was directly derived from an Angular web application example in this repo:
https://github.com/book-monkey2-build/iteration-3-http
Only the markup had to be substantially changed. The components and modules are almost the same and the service layer is entirely untouched.

## Setup

Clone

Install nativescript:

```
npm install -g nativescript
```

If you're unsure about setting up your Android SDK or Xcode please refer to this guide: http://docs.nativescript.org/angular/start/quick-setup

Then run 
`tns platform add android` OR
`tns platform add ios`

and then `npm install`

All set! You can now run the app using

* `tns run <PLATFORM>` (which requires a connected device or running emulator) or 
* `tns livesync <PLATFORM> --watch` (which requires a connected device or a running emulator) 

Run `tns device` and/or run `tns doctor` to check your setup.

## Screenshots for visual reference:

<img src="https://github.com/angular-buch/book-monkey-nativescript/blob/master/screenshots/home_nexus.png" width="285" alt="Home"/>
<img src="https://github.com/angular-buch/book-monkey-nativescript/blob/master/screenshots/list_nexus.png" width="285" alt="Book list"/>
<img src="https://github.com/angular-buch/book-monkey-nativescript/blob/master/screenshots/details_nexus.png" width="285" alt="Book Details"/>
