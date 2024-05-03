const { BUTTON } = require("./const/button");

const onManageLayouts = async (page) => {
  await new Promise((r) => setTimeout(r, 1000));
  let allArrows = await page.$$(BUTTON.TOP_MENU.MANAGE_LAYOUTS);

  allArrows[11].click();
};

const onPreviuosMonth = async (page) => {
  await new Promise((r) => setTimeout(r, 100));
  await page.click(BUTTON.CALENDAR.PREVIOUS_MONTH);
  await new Promise((r) => setTimeout(r, 100));
};

module.exports = {
  onManageLayouts,
  onPreviuosMonth,
};
