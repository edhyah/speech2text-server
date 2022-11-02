# speech2text-server

The Web Speech API doesn't come included in all modern web browsers, including
the Oculus Quest Browser. This is unfortunate because I want to show demos using
speech recognition and dictation in WebXR but don't want to pay for third party
services. The following is a quick, hacky server that spins up a Chrome instance
to perform speech recognition and provides results that can be obtained through
HTTP requests. It's a good temporary solution to use before actually committing
to use third party services.

Code based on [wsrn](https://github.com/DedaDev/wsrn).

## Installation and usage

To run,
```
npm start
```

Note the server runs on localhost; to view local pages on the quest, use
[this](https://developer.oculus.com/documentation/web/browser-remote-debugging/)
guide. The steps here did not work for me until I revisited the next day - I
assume this was because verification of my developer account took a few hours to
propagate through the system.

## Why does Speech Recognition repeatedly start and stop?

When I restart my computer, Chrome fails to detect the microphone, causing this
error. Simply unplug and plug the microphone back in to reset. If that doesn't
work, then make sure no other tabs in Chrome are using Speech Recognition as
well. More information can be found [here](http://is.gd/annyang_restarts).

## Notes

- Only tested on Linux
- Chromium doesn't work; only Chrome does
