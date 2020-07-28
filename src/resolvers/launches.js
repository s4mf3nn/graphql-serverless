const { getAllLaunches, getLaunch } = require("../api/launches");

module.exports = {
  Query: {
    getAllLaunches: () => getAllLaunches(),
    getLaunch: (_, { id }) => getLaunch({ id: id }),
  },
};
