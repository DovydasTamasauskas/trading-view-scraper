const setDateByMonths = async (page, month) => {
  await page.click(".button-uToIfRbZ");

  await new Promise((r) => setTimeout(r, 500));
  for (var i = 0; i < month; i++) await goToPreviuosMonth(page);

  await page.click(".day-N6r5jhbE");
  await page.click(".variant-primary-D4RPB3ZC");
};

const setDate = async (page) => {
  await page.click(".button-uToIfRbZ");
  await new Promise((r) => setTimeout(r, 500));
  await page.click(".variant-primary-D4RPB3ZC");
};

const goToPreviuosMonth = async (page) => {
  await page.click(".light-button-bYDQcOkp");
  await new Promise((r) => setTimeout(r, 200));
};

const exportData = async (page) => {
  await clickManageLayouts(page);

  await new Promise((r) => setTimeout(r, 1000));
  let all = await page.$$(".label-jFqVJoPk");

  for (const single of all) {
    const aa = await page.evaluate((el) => el.innerText, single);
    if (aa === "Export chart data…") {
      single.click();
    }
  }
  // await evaluateArray(page, ".label-jFqVJoPk", "innerText", layoutName);
  await new Promise((r) => setTimeout(r, 1000));

  await page.click(".variant-primary-D4RPB3ZC");
};

const clickManageLayouts = async (page) => {
  await new Promise((r) => setTimeout(r, 1000));
  let allArrows = await page.$$(".arrow-merBkM5y");

  allArrows[11].click();
};

const setLayout = async (page, layoutName) => {
  await clickManageLayouts(page);

  await new Promise((r) => setTimeout(r, 1000));
  let allLayouts = await page.$$(".layoutTitle-yyMUOAN9");

  for (const single of allLayouts) {
    const element = await page.evaluate((el) => el.innerText, single);
    if (element == layoutName) {
      single.click();
    }
  }

  // await evaluateArray(page, ".layoutTitle-yyMUOAN9", "innerText", layoutName);
  await new Promise((r) => setTimeout(r, 3000));
};

const navigate = async (page, layoutName) => {
  await new Promise((r) => setTimeout(r, 1000));

  let allArrows2 = await page.$$("button.isActive-I_wb5FjE");

  for (const single of allArrows2) {
    const aa = await page.evaluate(
      (el) => el.getAttribute("data-tooltip"),
      single
    );
    if (aa == layoutName) {
      return null;
    }
  }
  // await evaluateArray(page, "button.isActive-I_wb5FjE", "data-tooltip", null);

  await new Promise((r) => setTimeout(r, 1000));

  const querySelector =
    "button.button-I_wb5FjE.apply-common-tooltip.common-tooltip-vertical.accessible-I_wb5FjE";
  await evaluateArray(page, querySelector, "data-tooltip", layoutName);
};

const setTimeInterval = async (page, interval) => {
  await new Promise((r) => setTimeout(r, 1000));

  const querySelector =
    "button.button-merBkM5y.apply-common-tooltip.accessible-merBkM5y";
  await evaluateArray(page, querySelector, "data-tooltip", "Time Interval");

  await new Promise((r) => setTimeout(r, 500));

  await evaluateArray(page, ".menuItem-RmqZNwwp", "data-value", interval);
};

const changeTickerFromMain = async (page) => {
  await page.click("#header-toolbar-symbol-search");
  await new Promise((r) => setTimeout(r, 1000));

  await page.$eval(".input-qm7Rg5MB", (el) => (el.value = "TSLA"));
  await page.click(".input-qm7Rg5MB");
};

const getTickers = async (page) => {
  await new Promise((r) => setTimeout(r, 2000));
  let result = [];
  let times = await page.$$(".symbol-RsFlttSS");

  for (const single of times) {
    const aa = await page.evaluate(
      (el) => el.getAttribute("data-symbol-short"),
      single
    );
    result.push(single);
  }
  return result;
};

const setList = async (page, listName) => {
  await new Promise((r) => setTimeout(r, 1000));
  await page.click(".widgetBtn-mQBvegEO");
  await new Promise((r) => setTimeout(r, 1000));

  await evaluateArray(page, ".container-ODL8WA9K", "data-title", listName);
};

const evaluateArray = async (
  page,
  querySelector,
  attributeName,
  attributeValue
) => {
  await new Promise((r) => setTimeout(r, 1000));

  let list = await page.$$(querySelector);

  for (const item of list) {
    const element = await page.evaluate(
      (el, name) => el.getAttribute(name),
      item,
      attributeName
    );
    if (element == attributeValue) {
      item.click();
    }
  }
  await new Promise((r) => setTimeout(r, 1000));
};

module.exports = {
  exportData,
  setDateByMonths,
  setTimeInterval,
  getTickers,
  goToPreviuosMonth,
  setDate,
  setLayout,
  navigate,
  setList,
};
