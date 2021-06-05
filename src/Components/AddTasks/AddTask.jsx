import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddTask.css";
import TaskList from "../TaskList/TaskList";
import { addTask } from "../../redux/actions";
import { useDispatch } from "react-redux";

function AddTask({ taskData, setStatus }) {
    const [newTask, setNewTask] = useState("");
    const handleNewTask = (e) => {
        setNewTask(e.target.value);
    };

    const dispatch = useDispatch();

    const AlertSubmit = () => {
        newTask === ""
            ? alert("Empty task ;)")
            : dispatch(addTask({ description: newTask }));
        setNewTask("");
    };

    return (
        <>
            <div className="AddTaskContainer">
                <h1 style={{ fontSize: "80px" }}>T O D O</h1>
                <div className="addField">
                    <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Add a new task ..."
                        value={newTask}
                        onChange={handleNewTask}
                    />
                    <Button
                        className="add-btn"
                        style={{ width: "150px" }}
                        variant="dark"
                        onClick={AlertSubmit}
                    >
                        Add
                    </Button>
                </div>
                <TaskList />
            </div>
        </>
    );
}

export default AddTask;
