import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import "./EditTask.css";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/actions";
import { EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function EditTask({ taskData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(taskData);

    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(editTask({ id: taskData.id, newDescription: newDescription }));
        handleClose();
    };
    const [newDescription, setNewDescription] = useState(taskData.description);
    const handleChange = (e) => {
        setNewDescription(e.target.value);
    };

    return (
        <>
            <Button variant="outline" onClick={handleShow}>
                <EditOutlined />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        defaultValue={taskData.description}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer className="modalbtn">
                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                        style={{
                            border: "none",
                            background: "transparent",
                            color: "black",
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask;
