import {useState} from "react"

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Form,
    FormGroup,
    Label
} from "reactstrap"

function EditModal(props) {
    const [checked, setChecked] = useState(false)
    
    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalHeader toggle={props.toggle}>
            Edit Task
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="taskTitle">
                  Task Title
                </Label>
                <Input
                  id="taskTitle"
                  name="taskTitle"
                  type="text"
                  value={props.item.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="taskDescription">
                  Task Description
                </Label>
                <Input
                  id="taskDescription"
                  name="taskDescription"
                  type="text"
                  value={props.item.description}
                />
              </FormGroup>
              <FormGroup check>
                <Label check className="not-selectable pointer">
                  <Input type="checkbox" defaultChecked={props.item.completed ? 'true' : 'false'}/>
                  Completed ?
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={function noRefCheck(){}}
            >
              Submit
            </Button>
            <Button onClick={props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
    )
}

export default EditModal;