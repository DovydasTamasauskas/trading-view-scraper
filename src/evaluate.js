const sleep = require("./sleeper");

const clickByAtribute = async (
  page,
  querySelector,
  attributeName,
  attributeValue
) => {
  await sleep.medium();

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
  await sleep.medium();
};

const clickByInnterText = async (page, querySelector, innerTextValue) => {
  await sleep.medium();

  let list = await page.$$(querySelector);

  for (const item of list) {
    const element = await page.evaluate((el) => el.innerText, item);
    if (element == innerTextValue) {
      item.click();
    }
  }
  await sleep.medium();
};

const isListItemVisible = async (
  page,
  querySelector,
  attributeName,
  attributeValue
) => {
  await sleep.medium();

  let list = await page.$$(querySelector);

  for (const item of list) {
    const element = await page.evaluate(
      (el, name) => el.getAttribute(name),
      item,
      attributeName
    );
    if (element == attributeValue) {
      await sleep.medium();
      return true;
    }
  }
  await sleep.medium();
  return false;
};

module.exports = { clickByAtribute, isListItemVisible, clickByInnterText };
