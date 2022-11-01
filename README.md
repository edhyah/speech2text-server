# speech2text-server

The Web Speech API doesn't come included in all modern web browsers, including
the Oculus Quest Browser. This is unfortunate because I want to show demos using
speech recognition and dictation in WebXR but don't want to pay for third party
services. The following is a quick, hacky server that spins up a Chrome instance
to perform speech recognition and provides results that can be obtained through
HTTP requests. It's a good temporary solution to use before actually committing
to use third party services.

Code based on [wsrn](https://github.com/DedaDev/wsrn).

## Notes

- Only tested on Linux
- Chromium doesn't work; only Chrome does
