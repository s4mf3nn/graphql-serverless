import axios from "axios";
import { LAUNCHES } from "../libs/constants";
const API_URL = process.env.spacexApiUrl;

export async function getAllLaunches() {
  const url = `${API_URL}/${LAUNCHES}`;

  try {
    const response = await axios.get(url);
    return response.data.map((launch) => launchReducer(launch));
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

export async function getLaunch({ id }) {
  const url = `${API_URL}/${LAUNCHES}/${id}`;

  try {
    const response = await axios.get(url);
    return launchReducer(response.data);
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

function launchReducer(launch) {
  return {
    id: launch.flight_number,
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