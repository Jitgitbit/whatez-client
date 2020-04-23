import axios from "../axios";

export const All_ADDITIVES = "All_ADDITIVES";


function showAllAdditivesSuccess(additives) {
  return {
    type: All_ADDITIVES,
    payload: additives
  };
}
export const showAllAdditives = () => {
  return async function(dispatch) {
    const response = await axios(`/additives`);
    console.log("==================>>>  response.data @additivesAction", response.data);
    dispatch(showAllAdditivesSuccess(response.data));
  };
};