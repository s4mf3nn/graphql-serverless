import axios from "axios";
import { ROCKETS } from "../libs/constants";
const API_URL = process.env.spacexApiUrl;

export async function getAllRockets() {
  const url = `${API_URL}/${ROCKETS}`;

  try {
    const response = await axios.get(url);
    return response.data.map((rocket) => rocketReducer(rocket));
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

export async function getRocket({ id }) {
  const url = `${API_URL}/${ROCKETS}/${id}`;

  try {
    const response = await axios.get(url);
    return rocketReducer(response.data);
  } catch (error) {
    console.log("ERROR : ", error.message);
    return error;
  }
}

function rocketReducer(rocket) {
  return {
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
  };
}
