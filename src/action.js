const click = require("./click");
const evaluate = require("./evaluate");
const { BUTTON } = require("./const/button");
const sleep = require("./sleeper");

const setDateByMonths = async (page, month) => {
  await sleep.quick();
  await page.click(BUTTON.TIME_ZONE_MENU.CALENDAR);

  for (var i = 0; i < month; i++) await click.onPreviuosMonth(page);

  await page.click(BUTTON.CALENDAR.FIRST_DAY_OF_MONTH);
  await sleep.quick();
  await page.click(BUTTON.CALENDAR.SAVE);
};

const setDate = async (page) => {
  await sleep.quick();
  await page.click(BUTTON.TIME_ZONE_MENU.CALENDAR);
  await sleep.quick();
  await page.click(BUTTON.CALENDAR.SAVE);
};

const exportData = async (page) => {
  await click.onManageLayouts(page);

  await evaluate.clickByInnterText(
    page,
    BUTTON.MANAGE_LAYOUTS.EXPORT_DATA.CLASS,
    BUTTON.MANAGE_LAYOUTS.EXPORT_DATA.INNERTEXT
  );

  await page.click(BUTTON.CALENDAR.SAVE);
};

const setLayout = async (page, layoutName) => {
  await click.onManageLayouts(page);

  await evaluate.clickByInnterText(
    page,
    BUTTON.MANAGE_LAYOUTS.LAYOUT,
    layoutName
  );
};

const navigate = async (page, layoutName) => {
  const isWatchListView = await evaluate.isListItemVisible(
    page,
    BUTTON.MAIN_MENU.ACTIVE.CLASS,
    BUTTON.MAIN_MENU.ACTIVE.ATRIBUTE,
    layoutName
  );
  if (isWatchListView) return;

  await evaluate.clickByAtribute(
    page,
    BUTTON.MAIN_MENU.WATCHLIST.CLASS,
    BUTTON.MAIN_MENU.WATCHLIST.ATRIBUTE,
    layoutName
  );
};

const setTimeInterval = async (page, interval) => {
  await evaluate.clickByAtribute(
    page,
    BUTTON.TOP_MENU.TIME_INTERVAL.CLASS,
    BUTTON.TOP_MENU.TIME_INTERVAL.ATRIBUTE,
    "Time Interval"
  );

  await evaluate.clickByAtribute(
    page,
    BUTTON.TIME_INTERVAL.LABEL.CLASS,
    BUTTON.TIME_INTERVAL.LABEL.ATRIBUTE,
    interval
  );
};

const getTickers = async (page) => {
  await sleep.time(1000);
  return await page.$$(BUTTON.WATCHLIST.SYMBOL);
};

const setList = async (page, listName) => {
  await sleep.time(1000);
  await page.click(BUTTON.WATCHLIST.LIST.BUTTON);

  await evaluate.clickByAtribute(
    page,
    BUTTON.WATCHLIST.LIST.POPUP_LIST.CLASS,
    BUTTON.WATCHLIST.LIST.POPUP_LIST.ATRIBUTE,
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
