const c = require("../const");

const create = async (browser) => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto(c.ENDPIONT);
  return page;
};

module.exports = { create };
