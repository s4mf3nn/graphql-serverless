const axios = require("axios");

async function getAllLaunches() {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/launches");
    return response.data.map((launch) => launchReducer(launch));
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

async function getLaunch({ id }) {
  try {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launches/" + id
    );
    return launchReducer(response.data);
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

function launchReducer(launch) {
  return {
    id: launch.flight_number || 0,
    mission: launch.mission_name,
    year: launch.launch_year,
    date: launch.launch_date_local,
    success: launch.launch_success,
    rocket: {
      id: launch.rocket.rocket_id,
      name: launch.rocket.rocket_name,
      type: launch.rocket.rocket_type,
    },
  };
}

module.exports = {
  getAllLaunches,
  getLaunch,
};
