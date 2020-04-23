import axios from "../axios";

export const All_CATEGORIES = "All_CATEGORIES";


function showAllCategoriesSuccess(category) {
  return {
    type: All_CATEGORIES,
    payload: category
  };
}

export const showAllCategories = () => {
  return async function(dispatch, getState) {
    console.log("getState() @categoriesAction", getState());
    const response = await axios(`/categories`);
    console.log("response.data.category @categoriesAction", response.data);
    dispatch(showAllCategoriesSuccess(response.data));
  };
};