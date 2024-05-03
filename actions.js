const click = require("./click");
const evaluate = require("./evaluate");

const setDateByMonths = async (page, month) => {
  await page.click(".button-uToIfRbZ");

  await new Promise((r) => setTimeout(r, 500));
  for (var i = 0; i < month; i++) await click.onPreviuosMonth(page);

  await page.click(".day-N6r5jhbE");
  await page.click(".variant-primary-D4RPB3ZC");
};

const setDate = async (page) => {
  await page.click(".button-uToIfRbZ");
  await new Promise((r) => setTimeout(r, 500));
  await page.click(".variant-primary-D4RPB3ZC");
};

const exportData = async (page) => {
  await click.onManageLayouts(page);

  await new Promise((r) => setTimeout(r, 1000));
  let all = await page.$$(".label-jFqVJoPk");

  for (const single of all) {
    const aa = await page.evaluate((el) => el.innerText, single);
    if (aa === "Export chart data…") {
      single.click();
    }
  }
  // await evaluate.evaluateArray(page, ".label-jFqVJoPk", "innerText", layoutName);
  await new Promise((r) => setTimeout(r, 1000));

  await page.click(".variant-primary-D4RPB3ZC");
};

const setLayout = async (page, layoutName) => {
  await click.onManageLayouts(page);

  await new Promise((r) => setTimeout(r, 1000));
  let allLayouts = await page.$$(".layoutTitle-yyMUOAN9");

  for (const single of allLayouts) {
    const element = await page.evaluate((el) => el.innerText, single);
    if (element == layoutName) {
      single.click();
    }
  }

  // await evaluate.evaluateArray(page, ".layoutTitle-yyMUOAN9", "innerText", layoutName);
  await new Promise((r) => setTimeout(r, 3000));
};

const navigate = async (page, layoutName) => {
  const isWatchListView = await evaluate.isListItemVisible(
    page,
    "button.isActive-I_wb5FjE",
    "data-tooltip",
    layoutName
  );
  if (isWatchListView) return;

  const querySelector =
    "button.button-I_wb5FjE.apply-common-tooltip.common-tooltip-vertical.accessible-I_wb5FjE";
  await evaluate.evaluateArray(page, querySelector, "data-tooltip", layoutName);
};

const setTimeInterval = async (page, interval) => {
  await new Promise((r) => setTimeout(r, 1000));

  const querySelector =
    "button.button-merBkM5y.apply-common-tooltip.accessible-merBkM5y";
  await evaluate.evaluateArray(
    page,
    querySelector,
    "data-tooltip",
    "Time Interval"
  );

  await new Promise((r) => setTimeout(r, 500));

  await evaluate.evaluateArray(
    page,
    ".menuItem-RmqZNwwp",
    "data-value",
    interval
  );
};

const getTickers = async (page) => {
  await new Promise((r) => setTimeout(r, 2000));
  return await page.$$(".symbol-RsFlttSS");
};

const setList = async (page, listName) => {
  await new Promise((r) => setTimeout(r, 1000));
  await page.click(".widgetBtn-mQBvegEO");
  await new Promise((r) => setTimeout(r, 1000));

  await evaluate.evaluateArray(
    page,
    ".container-ODL8WA9K",
    "data-title",
    listName
  );
};

module.exports = {
  exportData,
  setDateByMonths,
  setTimeInterval,
  getTickers,
  setDate,
  setLayout,
  navigate,
  setList,
};
