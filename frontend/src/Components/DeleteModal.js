import axios from "axios"
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"


function DeleteModal(props) {

    const handleSubmit = (item) => {
      axios.delete(process.env.REACT_APP_API_URL + "/api/todos/" + item.id + "/")
      props.toggle()
      props.setDataReload(true)
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalHeader toggle={props.toggle}>
            Delete Task
          </ModalHeader>
          <ModalBody>
            Do you really want to delete task n°{props.item.id} ?<br></br>
            (this action is irreversible)
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={() => handleSubmit(props.item)}
            >
              Yes
            </Button>
            <Button onClick={props.toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal>
    )
}

export default DeleteModal;