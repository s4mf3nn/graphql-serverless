const { getAllRockets, getRocket } = require("../api/rockets");

module.exports = {
  Query: {
    getAllRockets: () => getAllRockets(),
    getRocket: (_, { id }) => getRocket({ id: id }),
  },
};
