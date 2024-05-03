const action = require("./src/action");
const c = require("./src/const/const");
const puppeteerBrowser = require("./setup/browser");
const window = require("./setup/window");

(async () => {
  const browser = await puppeteerBrowser.create();
  const page = await window.create(browser);

  await action.setLayout(page, c.LAYOUT_NAME);
  await action.navigate(page, c.MENIU_WATCHLIST);
  await action.setList(page, c.LIST_NAME);
  await action.setTimeInterval(page, c.TIME_INTERVAL);
  await action.setDateByMonths(page, c.HISTORY_LENGTH_MONTH);

  const tickers = await action.getTickers(page);
  for (const ticker of tickers) {
    ticker.click();
    await new Promise((r) => setTimeout(r, 500));
    await action.setDate(page);
    await new Promise((r) => setTimeout(r, 500));
    await action.exportData(page);
    await new Promise((r) => setTimeout(r, 500));
  }
})();
