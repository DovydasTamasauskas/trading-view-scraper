const puppeteer = require("puppeteer");
const actions = require("./actions");
const credentials = require("./credentials");

const ENDPIONT = "https://www.tradingview.com/chart/";

const MENIU_WATCHLIST = "Watchlist, details and news";

(async () => {
  const ws = credentials.WS_URL;
  const browser = await puppeteer.connect({
    browserWSEndpoint: ws,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto(ENDPIONT);

  await actions.navigate(page, MENIU_WATCHLIST);
  await actions.setLayout(page, "bot");
  await actions.setList(page, "fxcm_test");
  await actions.setTimeInterval(page, 60);
  await actions.setDateByMonths(page, 12);

  const tickers = await actions.getTickers(page);
  for (const ticker of tickers) {
    ticker.click();
    await new Promise((r) => setTimeout(r, 500));
    await actions.setDate(page);
    await new Promise((r) => setTimeout(r, 500));
    await actions.exportData(page);
    await new Promise((r) => setTimeout(r, 500));
  }
})();
