import { Dispatch } from "redux";
import { getAllUsers } from "../services/userService";
import { dataLoading, dataLoaded } from "../slices/userSlice";

export const getAllUsersAction = () => {
  return (dispatch: Dispatch) => {
    dispatch(dataLoading());
    return getAllUsers()
      .then((response: any) => {
        if (!response.hasError) {
          dispatch(dataLoaded(response.data));
        } else {
          return {
            errorMessage: response.errorMessage,
          };
        }
      })
      .catch((error: any) => {
        return { errorMessage: "Network Error ," + error };
      });
  };
};
