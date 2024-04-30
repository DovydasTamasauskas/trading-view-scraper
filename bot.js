const puppeteer = require("puppeteer");
const functions = require("./functions");

// sudo /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
const ENDPIONT = "https://www.tradingview.com/chart/";

(async () => {
  const ws =
    "ws://127.0.0.1:9222/devtools/browser/4a037f41-be9c-460a-9437-94c6c1a67dc0";
  const browser = await puppeteer.connect({
    browserWSEndpoint: ws,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto(ENDPIONT);

  await functions.changeDate(page);

  const tickers = await functions.changeTicker(page);
  for (const ticker of tickers) {
    ticker.click();
    await new Promise((r) => setTimeout(r, 500));
    await functions.setDate(page);
    await new Promise((r) => setTimeout(r, 500));
    await functions.exportData(page);
    await new Promise((r) => setTimeout(r, 500));
  }
})();
