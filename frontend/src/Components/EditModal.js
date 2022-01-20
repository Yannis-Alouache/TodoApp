import {useEffect, useState} from "react"
import { editTask } from "../Services"

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
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState('')

    useEffect(() => {
        if (props.loadEditModal) {
          setTitle(props.item.title)
          setDescription(props.item.description)
          setCompleted(props.item.completed) 
          props.setLoadEditModal(false)
        }
    }, [props])

    const handleSubmit = (item) => {
      const data = {
        title: title,
        description: description,
        completed: completed
      }
      
      editTask(item.id, data)
      .then(res => {
        if (res.status === 200) {
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
            Edit Task n°{props.item.id}
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
              onClick={() => handleSubmit(props.item)}
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