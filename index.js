const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer-core');
const path = require('path');

const port = process.env.PORT || 4242;
const app = express();
app.use(cors());

let browser;
let page;
(async () => {
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--window-size=200,200',
                '--enable-speech-input',
                '--window-position=0,0',
                '--use-fake-ui-for-media-stream',       // disable mic popup
                '--no-first-run',
                '--no-default-browser-check',
            ],
            executablePath: '/usr/bin/google-chrome',   // chromium doesn't work
            ignoreDefaultArgs: '--mute-audio',
        });

        [page] = await browser.pages();
        await page.goto(`file:${path.join(__dirname, '/html/index.html')}`);
    } catch (err) {
        console.log(err);
    }
})();

app.get('/', async (_, res) => {
    if (page) {
        const elem = await page.waitForSelector('#result');
        const result = await elem.evaluate(el => el.textContent);
        res.status(200).send(result);
    } else {
        res.status(503).send('Speech recognition engine unavailable.');
    }
});

app.listen(port, () => {
    console.log(`speech2text-server listening on port ${port}`)
})
