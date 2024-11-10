import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";
import LoadingPage from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";
import { apiClient } from "../ulits/api-client";
import { EDIT_TASK_ROUTE, GET_TASK_BY_ID_ROUTE } from "../ulits/constrants";
import SuccessPopup from "../components/SuccessPopup";

interface EditTaskForm {
  title: string;
  description: string;
  deadline: string;
  priority: "Low" | "Medium" | "High";
  status: "To Do" | "On Progress" | "Done";
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const EditTaskForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditTaskForm>();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Fetch the task data using the ID from the route
    const fetchTask = async () => {
      try {
        const response = await apiClient.get(`${GET_TASK_BY_ID_ROUTE}/${id}`);
        const data = response.data.data;
        reset({
          title: data.title,
          description: data.description,
          deadline: formatDate(data.deadline), // Format date here
          priority: data.priority as "Low" | "Medium" | "High",
          status: data.status as "To Do" | "On Progress" | "Done",
        });
      } catch (error) {
        setError(true);
      }
    };

    fetchTask();
  }, [id, reset]);

  const handleEditTask: SubmitHandler<EditTaskForm> = async (data) => {
    setLoading(true);
    setError(false);

    try {
      const response = await apiClient.patch(`${EDIT_TASK_ROUTE}/${id}`, {
        id,
        ...data,
      });
      if (response) {
        setLoading(false);
        setShowPopup(true);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    navigate("/");
    setShowPopup(false);
  };

  const priorityOptions = ["Low", "Medium", "High"];
  const statusOptions = ["To Do", "On Progress", "Done"];

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <>
      {showPopup && (
        <SuccessPopup
          message="The task has been edited successfully"
          onClose={handleClosePopup}
        />
      )}
      <div className="w-full mb-16">
        <div className="flex flex-col justify-center items-center md:pt-5">
          <h1 className="lg:text-4xl text-3xl font-extrabold pt-3 text-center">
            Edit Task
          </h1>

          <form
            onSubmit={handleSubmit(handleEditTask)}
            className="bg-gray-300 md:p-10 lg:w-[60%] md:w-[80%] shadow-card m-3 p-4 rounded-xl md:rounded-2xl text-black font-semibold"
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="md:col-span-2">
                <Input
                  type="text"
                  placeholder="Enter Task Title"
                  {...register("title", { required: true })}
                  className="px-3 py-2 rounded-lg w-full"
                  label="Task Title"
                  aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title && (
                  <p role="alert" className="text-red-500 font-medium">
                    *Task title is required
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description">Task Description</label>
                <textarea
                  rows={4}
                  cols={50}
                  placeholder="Enter Task Description"
                  {...register("description")}
                  className="px-3 py-2 rounded-lg w-full"
                  aria-invalid={errors.description ? "true" : "false"}
                />
                {errors.description && (
                  <p role="alert" className="text-red-500 font-medium">
                    *Task description is required
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <Input
                  type="date"
                  {...register("deadline", { required: true })}
                  className="px-3 py-2 rounded-lg w-full"
                  label="Task Deadline"
                  aria-invalid={errors.deadline ? "true" : "false"}
                />
                {errors.deadline && (
                  <p role="alert" className="text-red-500 font-medium">
                    *Deadline is required
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <Select
                  options={priorityOptions}
                  {...register("priority", { required: true })}
                  className="px-3 py-2 rounded-lg w-full"
                  label="Priority"
                />
                {errors.priority && (
                  <p role="alert" className="text-red-500 font-medium">
                    *Priority is required
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <Select
                  options={statusOptions}
                  {...register("status", { required: true })}
                  className="px-3 py-2 rounded-lg w-full"
                  label="Status"
                />
                {errors.status && (
                  <p role="alert" className="text-red-500 font-medium">
                    *Status is required
                  </p>
                )}
              </div>

              <div className="mt-8 flex items-center">
                <button
                  type="submit"
                  className="bg-black rounded-full border-none px-7 py-3 text-xl flex cursor-pointer items-center justify-center font-semibold text-white hover:bg-gray-800 duration-200"
                >
                  Edit Task
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTaskForm;
