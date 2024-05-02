const changeDate = async (page, month) => {
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

  await new Promise((r) => setTimeout(r, 1000));

  let allArrows = await page.$$(
    "button.button-I_wb5FjE.apply-common-tooltip.common-tooltip-vertical.accessible-I_wb5FjE"
  );

  for (const single of allArrows) {
    const aa = await page.evaluate(
      (el) => el.getAttribute("data-tooltip"),
      single
    );
    if (aa == layoutName) {
      single.click();
    }
  }
};

const changeTimeInterval = async (page) => {
  await new Promise((r) => setTimeout(r, 1000));
  let allArrows = await page.$$(
    "button.button-merBkM5y.apply-common-tooltip.accessible-merBkM5y"
  );

  for (const single of allArrows) {
    const aa = await page.evaluate(
      (el) => el.getAttribute("data-tooltip"),
      single
    );
    if (aa == "Time Interval") {
      single.click();
    }
  }
  await new Promise((r) => setTimeout(r, 1000));

  let times = await page.$$(".menuItem-RmqZNwwp");

  for (const single of times) {
    const aa = await page.evaluate(
      (el) => el.getAttribute("data-value"),
      single
    );
    console.log(aa);
    if (aa == "60") {
      single.click();
    }
  }
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

module.exports = {
  exportData,
  changeDate,
  changeTimeInterval,
  getTickers,
  goToPreviuosMonth,
  setDate,
  setLayout,
  navigate,
};
