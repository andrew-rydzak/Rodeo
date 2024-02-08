import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
    buttonCloseText:"Close",
    buttonCloseStyle: "secondary",
    bodyText: "Body Text Here",
    title: "Modal title",
  },
  reducers: {
    showModal: (state, action) => {
      state.showModal = true;
      state.buttonCloseStyle = action.payload.buttonCloseStyle;
      state.buttonCloseText = action.payload.buttonCloseText;
      state.bodyText = action.payload.bodyText;
      state.title = action.payload.title;
    },
    hideModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice;
