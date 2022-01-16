import axios from "axios"
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
    const [title, setTitle] = useState(props.item.title)
    const [description, setDescription] = useState(props.item.description)
    const [completed, setCompleted] = useState(props.item.completed)

    const handleSubmit = () => {
      const data = {
        title: title,
        description: description,
        completed: completed
      }

      const headers = {
        'Content-Type': 'application/json'
      }

      axios.put(process.env.REACT_APP_API_URL + "/api/todos/" + props.item.id + "/", data, {
        headers: headers
      })

      props.toggle()
      props.setDataReload(true)
    }
    
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check className="not-selectable pointer">
                  <Input type="checkbox" defaultChecked={completed ? true : false} onClick={() => setCompleted(!completed)}/>
                  Completed ?
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={() => handleSubmit()}
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