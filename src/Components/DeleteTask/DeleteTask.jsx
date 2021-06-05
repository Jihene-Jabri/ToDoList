import React from "react";
import { deleteTask } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function DeleteTask({ taskData }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(taskData.id));
    };
    return (
        <div>
            <Button variant="outline" onClick={handleDelete} size="lg">
                <DeleteOutlined />
            </Button>
        </div>
    );
}

export default DeleteTask;
