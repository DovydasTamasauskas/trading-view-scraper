# trading-view-scraper

## Demo

Demo is aviable on [my youtube channel](https://www.youtube.com/watch?v=63JEKOURBzo).

This bot scrapes [tradingView](https://www.tradingview.com) webiste for historical crypto, forex, stock, futures and major World exchanges data.

## Available scripts

```bash
npm install
```

```bash
node bot.js
```

## Setup

To receive data from tradingView you should be looged in already and **have paided membership**.

mac:

create copy of `credentials.js.sample` with name `credentials.js`

run in terminal:

```bash
sudo /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

Copy generated `ws://127.0.0.1:9222/devtools/browser/xxxxx...` to `credentials.js` file

Navigate to `runParams.js` file and add WatchList and Layout.
