const { BUTTON } = require("./const/button");
const sleep = require("./sleeper");

const onManageLayouts = async (page) => {
  await sleep.medium();
  let allArrows = await page.$$(BUTTON.TOP_MENU.MANAGE_LAYOUTS);

  allArrows[11].click();
};

const onPreviuosMonth = async (page) => {
  await sleep.time(200);
  await page.click(BUTTON.CALENDAR.PREVIOUS_MONTH);
};

module.exports = {
  onManageLayouts,
  onPreviuosMonth,
};
