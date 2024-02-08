import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {deactivateModal} from '../actions/modalActions'

function PopUpModal() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.modal.title)
  const bodyText = useSelector((state) => state.modal.bodyText)

  const buttonCloseStyle = useSelector((state) => state.modal.buttonCloseStyle)
  const buttonCloseText = useSelector((state) => state.modal.buttonCloseText)

  return (
    <div
      className="modal show"
      style={{ display: "block", marginTop: "10rem" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

         <Modal.Body>{bodyText}</Modal.Body>

        <Modal.Footer>
          <Button variant={buttonCloseStyle} onClick={() => { dispatch(deactivateModal()) }}>
            {buttonCloseText}
          </Button>
        </Modal.Footer>  
      </Modal.Dialog>
    </div>
  );
}

PopUpModal.defaultProps = {
  variantClose: "secondary",
  variantOpen: "primary",
  children: <p>Generic Text Here</p>,
  title: "Modal title",
  children:null
};

export default PopUpModal;
