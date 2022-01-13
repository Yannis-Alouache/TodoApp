import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"

function DeleteModal(props) {
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
              onClick={function noRefCheck(){}}
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