import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import "./TaskList.css";
function TaskList() {
    const [status, setStatus] = useState("all");
    const task = useSelector((state) => state.taskReducer.task);
    return (
        <div className="listContainer">
            <div className="taskList">
                <button
                    variant="outline-primary"
                    onClick={() => setStatus("all")}
                >
                    All
                </button>
                <button
                    variant="outline-primary"
                    onClick={() => setStatus("done")}
                >
                    Done
                </button>
                <button
                    variant="outline-primary"
                    onClick={() => setStatus("undone")}
                >
                    Undone
                </button>
                <div className="list">
                    {status === "done"
                        ? task
                              .filter((taskData) => taskData.isDone === true)
                              .map((taskData, index) => (
                                  <Task
                                      taskData={taskData}
                                      index={index}
                                      key={index}
                                  />
                              ))
                        : status === "undone"
                        ? task
                              .filter((taskData) => taskData.isDone === false)
                              .map((taskData, index) => (
                                  <Task
                                      taskData={taskData}
                                      index={index}
                                      key={index}
                                  />
                              ))
                        : task.map((taskData, index) => (
                              <Task
                                  taskData={taskData}
                                  index={index}
                                  key={index}
                              />
                          ))}
                </div>
            </div>
        </div>
    );
}

export default TaskList;
