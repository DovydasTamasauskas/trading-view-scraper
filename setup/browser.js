const puppeteer = require("puppeteer");
const credentials = require("../credentials");

const create = async () => {
  const ws = credentials.WS_URL;
  return await puppeteer.connect({
    browserWSEndpoint: ws,
  });
};

module.exports = { create };
