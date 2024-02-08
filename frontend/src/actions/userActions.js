import axios from "axios";
import {
  loginRequest,
  loginFail,
  loginSuccess,
  logout,
  registerRequest,
  registerSuccess,
  registerFail,
  clearError,
} from "../reducers/userSlice";

// const dispatch = useDispatch();
const isInternalError = (error) =>{
  // Make 500 lvl errors human readable
  if(error?.reguest?.status == 500){
    error.message = "An unexpected error has occured, please try again later."
  }
  return error
}

// Thunk allows a function in a function to use dispatch
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch(loginSuccess(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    isInternalError(error)
    dispatch(
      loginFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const clearUserError = () => async (dispatch) => {
  // Used to clear errors induced by the user, failed login etc...
  dispatch(clearError());
};

// export const logout = () => (dispatch) => {
//   localStorage.removeItem('userInfo')
//   localStorage.removeItem('cartItems')
//   localStorage.removeItem('shippingAddress')
//   localStorage.removeItem('paymentMethod')
//   dispatch({ type: USER_LOGOUT })
//   dispatch({ type: USER_DETAILS_RESET })
//   dispatch({ type: ORDER_LIST_MY_RESET })
//   dispatch({ type: USER_LIST_RESET })
//   document.location.href = '/login'

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      dispatch(registerRequest());

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users",
        { firstName, lastName, email, password },
        config
      );

      dispatch(registerSuccess(data));

      dispatch(loginSuccess(data));

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      isInternalError(error)
      dispatch(
        registerFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
