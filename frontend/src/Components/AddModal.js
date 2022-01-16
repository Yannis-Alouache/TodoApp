import {useState} from "react"
import axios from "axios"

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

function AddModal(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = () => {
        const data = {
            title: title,
            description: description
        }

        const headers = {
          'Content-Type': 'application/json'
        }

        axios.post(process.env.REACT_APP_API_URL + "/api/todos/", data, {
          headers: headers
        })
        .then(res => {
          if (res.status === 201) {
            props.toggle()
            setTitle("")
            setDescription("")
            props.setDataReload(true)
          }
        })
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalHeader toggle={props.toggle}>
            Add Task
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

export default AddModal;