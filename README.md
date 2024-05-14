# trading-view-scraper

## Demo

https://www.youtube.com/watch?v=63JEKOURBzo

## Available scripts

```bash
npm install
```

```bash
node bot.js
```

## Setup

To reserve data from tradingView you should be looged in already and have paid membership.

mac:

create copy of `credentials.js.sample` with name `credentials.js`

run in terminal:

```bash
sudo /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

Copy generated `ws://127.0.0.1:9222/devtools/browser/xxxxx...` to `credentials.js` file
