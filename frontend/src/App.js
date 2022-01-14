import React, { useState, useEffect } from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap"
import DeleteModal from "./Components/DeleteModal";
import EditModal from "./Components/EditModal";
import AddModal from "./Components/AddModal";
import axios from "axios";

function App() {
  const [viewCompleted, setViewCompleted] = useState(false)
  const [todoList, setTodoList] = useState(null)

  const [completedBtnClass, setCompletedBtnClass] = useState("")
  const [uncompletedBtnClass, setuncompletedBtnClass] = useState("active")

  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/api/todos/")
    .then(res => {
      setTodoList(res.data)
      setCurrentItem(res.data[0])
    })
  }, [todoList]);

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
    if (!currentItem)
      return null
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


      {todoList ? renderItems() : <div></div>}

    </main>
  );
}

export default App;
