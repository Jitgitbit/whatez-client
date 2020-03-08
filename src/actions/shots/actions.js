import axios from "axios";

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

export const createShot = (

  imageUrl,
  arrayE,
  history,
  token
) => {
  return async function(dispatch, getState) {
    
    const user = { ...getState().user.user };
    console.log("TOKEN: ", token);

    axios
      .post(
        "http://localhost:5000/shots/new",
        {
          user,
          data: { imageUrl, arrayE }
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(resp => {
        dispatch(createShotSuccess(resp.data));
        console.log("HISTORY:", history);
        history.push("/shots");
        console.log("SHOT CREATION SUCCESSFUL", resp.data);
      })
      .catch(error => console.error("error", error));
  };
};

export const getShots = () => {

  return async function(dispatch, getState) {
    axios
      .get("http://localhost:5000/shots")
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
