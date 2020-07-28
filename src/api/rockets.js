const axios = require("axios");

async function getAllRockets() {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");
    return response.data.map((rocket) => rocketReducer(rocket));
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

async function getRocket({ id }) {
  try {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/rockets/" + id
    );
    return rocketReducer(response.data);
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

function rocketReducer(rocket) {
  return {
    id: rocket.rocket_id || 0,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
  };
}

module.exports = {
  getAllRockets,
  getRocket,
};
