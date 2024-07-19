const quick = async () => {
  await new Promise((r) => setTimeout(r, 1000));
};

const medium = async () => {
  await new Promise((r) => setTimeout(r, 1000));
};

const time = async (value) => {
  await new Promise((r) => setTimeout(r, value));
};

module.exports = { quick, medium, time };
