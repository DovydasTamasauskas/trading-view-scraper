const click = require("./click");
const evaluate = require("./evaluate");

const setDateByMonths = async (page, month) => {
  await new Promise((r) => setTimeout(r, 500));
  await page.click(".button-uToIfRbZ");

  for (var i = 0; i < month; i++) await click.onPreviuosMonth(page);

  await page.click(".day-N6r5jhbE");
  await new Promise((r) => setTimeout(r, 500));
  await page.click(".variant-primary-D4RPB3ZC");
};

const setDate = async (page) => {
  await new Promise((r) => setTimeout(r, 500));
  await page.click(".button-uToIfRbZ");
  await new Promise((r) => setTimeout(r, 500));
  await page.click(".variant-primary-D4RPB3ZC");
};

const exportData = async (page) => {
  await click.onManageLayouts(page);

  await evaluate.clickByInnterText(
    page,
    ".label-jFqVJoPk",
    "Export chart data…"
  );

  await page.click(".variant-primary-D4RPB3ZC");
};

const setLayout = async (page, layoutName) => {
  await click.onManageLayouts(page);

  await evaluate.clickByInnterText(page, ".layoutTitle-yyMUOAN9", layoutName);
};

const navigate = async (page, layoutName) => {
  const isWatchListView = await evaluate.isListItemVisible(
    page,
    "button.isActive-I_wb5FjE",
    "data-tooltip",
    layoutName
  );
  if (isWatchListView) return;

  await evaluate.clickByAtribute(
    page,
    "button.button-I_wb5FjE.apply-common-tooltip.common-tooltip-vertical.accessible-I_wb5FjE",
    "data-tooltip",
    layoutName
  );
};

const setTimeInterval = async (page, interval) => {
  await evaluate.clickByAtribute(
    page,
    "button.button-merBkM5y.apply-common-tooltip.accessible-merBkM5y",
    "data-tooltip",
    "Time Interval"
  );

  await evaluate.clickByAtribute(
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
  await new Promise((r) => setTimeout(r, 3000));
  await page.click(".widgetBtn-mQBvegEO");

  await evaluate.clickByAtribute(
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
