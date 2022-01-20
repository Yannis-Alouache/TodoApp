import { deleteTask } from "../Services"
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"


function DeleteModal(props) {

    const handleSubmit = (item) => {
      deleteTask(item.id)
      .then(res => {
        if (res.status === 200 || res.status === 204) {
          props.toggle()
          props.setDataReload(true)
        }
      })
      .catch((e) => {
        console.log(e)
      })
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