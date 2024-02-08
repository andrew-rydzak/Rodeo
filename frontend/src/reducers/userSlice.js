import { createSlice } from "@reduxjs/toolkit";

// TODO when user logs out and or fails login this local storege needs to be reset with state
// This will keep the application state in sync with local strage so that when user leaves they
// come back to the same state in the application
// TODO test that when security token expires user has to log back in again
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// const initialState = {
//   // cart: {
//   //   cartItems: cartItemsFromStorage,
//   //   shippingAddress: shippingAddressFromStorage,
//   // },
//   // TODO add this as the starting state
//   userLogin: { userInfo: userInfoFromStorage },
// };

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    loading: false,
    userInfo: userInfoFromStorage,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.isLoggedIn = false;
      state.loading = true;
      state.userInfo = {};
      state.error = null;
    },
    loginFail: (state, action) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.userInfo = {}; // TODO, this is temporary. remove when ready
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.userInfo = action.payload;
      state.error = null;
    },
    logout: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.userInfo = {};
      state.error = null;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginRequest,
  loginFail,
  loginSuccess,
  logout,
  registerRequest,
  registerSuccess,
  registerFail,
  clearError,
} = userSlice.actions;

export default userSlice;
