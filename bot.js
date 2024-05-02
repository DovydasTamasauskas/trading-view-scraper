const puppeteer = require("puppeteer");
const functions = require("./functions");
const credentials = require("./credentials");

const ENDPIONT = "https://www.tradingview.com/chart/";

(async () => {
  const ws = credentials.WS_URL;
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
