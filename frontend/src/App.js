import React, { useState } from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
  Label
} from "reactstrap"
import DeleteModal from "./Components/DeleteModal";
import EditModal from "./Components/EditModal";
import AddModal from "./Components/AddModal";


const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];

function App() {
  const [viewCompleted, setViewCompleted] = useState(false)
  const [todoList, setTodoList] = useState(todoItems)

  const [completedBtnClass, setCompletedBtnClass] = useState("")
  const [uncompletedBtnClass, setuncompletedBtnClass] = useState("active")

  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [currentItem, setCurrentItem] = useState(todoList[0]);

  const handleCompletedBtn = () => {
    setViewCompleted(true)
    setuncompletedBtnClass("")
    setCompletedBtnClass("active")
  }

  const handleUncompletedBtn = () => {
    setViewCompleted(false)
    setCompletedBtnClass("")
    setuncompletedBtnClass("active")
  }

  const addToggle = () => setAddModal(!addModal);
  const deleteToggle = () => setDeleteModal(!deleteModal)
  const editToggle = () => setEditModal(!editModal)

  const handleDelete = (item) => {
    setDeleteModal(!deleteModal)
    setCurrentItem(item)
  }

  const handleEdit = (item) => {
    setEditModal(!editModal)
    setCurrentItem(item)
  }

  const renderItems = () => {
    const Items = todoList.filter( (item) => item.completed === viewCompleted)

    return Items.map((item) => (
      <div className="mt-3" key={item.id}>
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              {item.title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Task n°{item.id}
            </CardSubtitle>
            <CardText>
              {item.description}
            </CardText>
            <Button color="danger" onClick={() => handleDelete(item)}>
              Delete
            </Button>
            <DeleteModal toggle={deleteToggle} modal={deleteModal} item={currentItem}/>
            {' '}
            <Button color="info" onClick={() => handleEdit(item)}>
              Edit
            </Button>
            <EditModal toggle={editToggle} modal={editModal} item={currentItem} />
          </CardBody>
        </Card>
      </div>
    ));
  }


  return (
    <main className="container mt-5">
      <h1 className="text-center">My TodoApp</h1>

      <div className="mt-3">
        <Button block={true} onClick={addToggle}>
          Add Task
        </Button>
        <AddModal modal={addModal} toggle={addToggle} item={currentItem} />
      
      </div>

      <div className="mt-5">
        <Row>
          <Col align="center">
            <Button className={completedBtnClass} onClick={() => handleCompletedBtn()}>
              Completed
            </Button>
          </Col>

          <Col align="center">
            <Button className={uncompletedBtnClass} onClick={() => handleUncompletedBtn()}>
              Uncompleted
            </Button>
          </Col>
        </Row>
      </div>

      {renderItems()}

    </main>
  );
}

export default App;
