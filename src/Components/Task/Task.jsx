import React from "react";
import { Button } from "react-bootstrap";
import "./Task.css";
import { useDispatch } from "react-redux";
import { completeTask } from "../../redux/actions";
import EditTask from "../EditTask/EditTask";
import DeleteTask from "../DeleteTask/DeleteTask";
import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Task({ taskData, index }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(completeTask({ id: taskData.id }));
    };
    // console.log(taskData);
    return (
        <div className="Container-task">
            <div className="task">
                <h5
                    style={{
                        textDecoration: taskData.isDone
                            ? "line-through"
                            : "none",
                    }}
                >
                    Task {index + 1}: {taskData.description}
                </h5>
                <div className="done">
                    <Button
                        className="done-btn"
                        variant={taskData.isDone}
                        onClick={handleClick}
                    >
                        {taskData.isDone ? "✔️" : <LoadingOutlined />}
                    </Button>

                    <EditTask taskData={taskData} />
                    <DeleteTask taskData={taskData} />
                </div>
            </div>
        </div>
    );
}

export default Task;
