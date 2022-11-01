const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
    try {
        let browser = await puppeteer.launch({
            headless: true,
            args: [
                //'--window-size=200,200',
                '--enable-speech-input',
                '--window-position=0,0',
                '--use-fake-ui-for-media-stream',       // disable mic popup
                '--no-first-run',
                '--no-default-browser-check',
            ],
            executablePath: '/usr/bin/google-chrome',   // chromium doesn't work
            ignoreDefaultArgs: '--mute-audio',
        });

        const [page] = await browser.pages();
        await page.goto(`file:${path.join(__dirname, '/html/index.html')}`);
    } catch (err) {
        console.log(err);
    }
})();

