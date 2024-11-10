import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../ulits/api-client";
import { DELETE_TASK_ROUTE } from "../ulits/constrants";
import SuccessPopup from "./SuccessPopup";
interface TaskCardProps {
  task: {
    _id: string;
    title: string;
    priority: string;
    description?: string;
    deadline: string;
  };
}
const TaskCard: React.FC<TaskCardProps> = (
  { task }
) => {
  const priorityColor =
    task.priority === "High"
      ? "text-red-500  bg-red-100 py-1 px-2 rounded-md"
      : task.priority === "Medium"
      ? "text-yellow-500  bg-yellow-100 py-1 px-2 rounded-md"
      : "text-green-500  bg-green-100 py-1 px-2 rounded-md";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(`/edit-task/${id}`);
  };

  const handleDelete = async (taskId: string) => {
    console.log("handleDelete", taskId);
    try {
      const response = await apiClient.delete(`${DELETE_TASK_ROUTE}/${taskId}`);
      if(response){
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleClosePopup = () => {
    navigate("/");
    setShowPopup(false);
  };

  return (
    <>
    {showPopup && (
      <SuccessPopup
        message="The task has been edited successfully"
        onClose={handleClosePopup}
      />
    )}
    <div className="bg-white rounded-lg p-4 mb-4 shadow-card ">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm lg:text-xs font-semibold ${priorityColor}`}>
          {task.priority}
        </span>

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="6" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="18" r="1.5" />
            </svg>
          </button>


          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleEdit(task._id);
                }}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleDelete(task._id);
                }}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <h3 className="text-lg lg:text-md font-semibold">{task.title}</h3>
      {task.description && (
        <p className="text-md lg:text-sm text-gray-500 mt-1">
          {task.description}
        </p>
      )}
      <p className="text-sm lg:text-xs text-gray-700 mt-2">
        Deadline: {new Date(task.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
      </p>
    </div>
    </>
  );
};

export default TaskCard;
