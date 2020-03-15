import axios from "../axios";

export const SHOT_CREATE_SUCCESS = "SHOT_CREATE_SUCCESS";
export const FETCH_SHOTS_SUCCESS = "FETCH_SHOTS_SUCCESS";

function createShotSuccess(shot) {
  return {
    type: SHOT_CREATE_SUCCESS,
    payload: {
      shot: shot
    }
  };
}

export const createShot = (formData, history) => {
  return async function(dispatch, getState) {
    const token = getState().user.user.token;

    console.log("TOKEN: ", token);

    axios
      .post("/shots/new", formData, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 240000
      })
      .then(resp => {
        dispatch(createShotSuccess(resp.data));
        console.log("SHOT CREATION SUCCESSFUL", resp.data);
        history.push("/shots");
      })
      .catch(error => console.error("error", error));
  };
};

export const getShots = () => {
  return async function(dispatch, getState) {
    axios
      .get("/shots")
      // .get("http://localhost:4000/shots?page=1&limit=3")
      .then(resp => {
        dispatch(fetchShotSuccess(resp.data));
        console.log("GET ALL SHOTS SUCCESSFULL: ", resp.data);
      })
      .catch(error => console.error("error", error));
  };
};

function fetchShotSuccess(shots) {
  return {
    type: FETCH_SHOTS_SUCCESS,
    payload: shots
  };
}
