import { showModal, hideModal } from "../reducers/modalSlice";

export const activateModal = (action) => async (dispatch) => {
  // Action is a JSON object
  dispatch(showModal(action));
};

export const deactivateModal = () => async (dispatch) => {
  dispatch(hideModal());
};
