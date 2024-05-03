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

const isListItemVisible = async (
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
      await new Promise((r) => setTimeout(r, 1000));
      return true;
    }
  }
  await new Promise((r) => setTimeout(r, 1000));
  return false;
};

module.exports = { evaluateArray, isListItemVisible };