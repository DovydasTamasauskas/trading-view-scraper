# trading-view-scraper

## Demo

The demo is available on [my youtube channel](https://www.youtube.com/watch?v=63JEKOURBzo).

This bot scrapes [tradingView](https://www.tradingview.com) website for historical crypto, forex, stock, futures, and major World exchanges data.

## Available scripts

```bash
npm install
```

```bash
node bot.js
```

## Setup

To receive data from tradingView you should be logged in already and **have paid membership**.

mac:

create a copy of `credentials.js.sample` with the name `credentials.js`

run in terminal:

```bash
sudo /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

Copy generated `ws://127.0.0.1:9222/devtools/browser/xxxxx...` to `credentials.js` file

Navigate to the `runParams.js` file and place your WatchList and Layout names.

## Lessons Learned

The first scraper version was built with Python and Selenium. After a while, CAPTCHA occurred.

Puppeteer was chosen because it simply opens a new tab and remembers previously logged-in user.
