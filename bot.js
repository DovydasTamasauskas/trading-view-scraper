const action = require("./src/action");
const c = require("./src/const/const");
const puppeteerBrowser = require("./setup/browser");
const window = require("./setup/window");
const params = require("./runParams");
const sleep = require("./src/sleeper");

(async () => {
  try {
    await fetch("http://localhost:3000/delete-exports?mode=hard");
  } catch (e) {
    console.log("Fialed to delete export in BE ", e);
  }
  const browser = await puppeteerBrowser.create();
  const page = await window.create(browser);

  await action.setDateByMonths(page, c.HISTORY_LENGTH_MONTH);

  for (const runParam of params.runParams) {
    await action.setLayout(page, runParam.LAYOUT_NAME);
    await action.navigate(page, c.MENIU_WATCHLIST);
    await action.setList(page, runParam.LIST_NAME);
    await action.setTimeInterval(page, c.TIME_INTERVAL);

    const tickers = await action.getTickers(page);
    for (const ticker of tickers) {
      ticker.click();
      await sleep.quick();
      await action.setDate(page);
      await sleep.quick();
      await action.exportData(page);
      await sleep.quick();
    }
  }
  try {
    await fetch("http://localhost:3000/export");
  } catch (e) {
    console.log("failed to export BE ", e);
  }
  process.exit(0);
})();
