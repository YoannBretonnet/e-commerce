import { publicRequest } from "../requestMethods";
import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { registerUserSuccess, registerUserFailed } from "./registerRedux";

export const login = async (dispatch, user)  => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(error){
        dispatch(loginFailure())
    }
};

export const register = (formData) => async (dispatch) => {
    try {
      const res = await publicRequest.post("/auth/register", formData);
      dispatch(registerUserSuccess(res.data));
    } catch (error) {
      dispatch(registerUserFailed(error.message));
    }
  };