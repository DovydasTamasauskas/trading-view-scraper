const onManageLayouts = async (page) => {
  await new Promise((r) => setTimeout(r, 1000));
  let allArrows = await page.$$(".arrow-merBkM5y");

  allArrows[11].click();
};

const onPreviuosMonth = async (page) => {
  await page.click(".light-button-bYDQcOkp");
  await new Promise((r) => setTimeout(r, 200));
};

module.exports = {
  onManageLayouts,
  onPreviuosMonth,
};
