const changeDate = async (page) => {
  await page.click(".button-uToIfRbZ");
  await new Promise((r) => setTimeout(r, 1000));
  await page.click(".light-button-bYDQcOkp");
  await page.click(".light-button-bYDQcOkp");
  await page.click(".light-button-bYDQcOkp");
  await page.click(".day-N6r5jhbE");
  await page.click(".variant-primary-D4RPB3ZC");
};

const exportData = async (page) => {
  let allArrows = await page.$$(
    "button.button-merBkM5y.apply-common-tooltip.accessible-merBkM5y"
  );

  for (const single of allArrows) {
    const aa = await page.evaluate(
      (el) => el.getAttribute("data-tooltip"),
      single
    );
    if (aa == "Manage layouts") {
      single.click();
    }
  }

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

const changeTicker = async (page) => {};

module.exports = { exportData, changeDate, changeTicker };
