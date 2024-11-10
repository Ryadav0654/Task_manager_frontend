import React from "react";
import TaskCard from "./TaskCard";

interface TaskColumnProps {
  title: string;
  tasks: Array<{
    _id: string;
    title: string;
    priority: string;
    description?: string;
    deadline: string;
  }>;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  const titleLineColor =
    title === "To Do"
      ? "bg-blue-700"
      : title === "On Progress"
      ? "bg-orange-400"
      : "bg-green-500";
  return (
    <div className="bg-[#ecedee] rounded-lg p-6 shadow-card  lg:min-h-full mt-6 lg:mt-0 ">
      <div className="flex items-center mb-4 justify-center gap-3">
        <span className={`rounded-full w-3 h-3 ${titleLineColor}`}></span>
        <h2 className="text-xl font-semibold text-center">{title}</h2>
      </div>
      <div className={`h-1 ${titleLineColor} mb-5`}></div>
      {/* {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))} */}
      <div className="overflow-y-scroll h-[63vh] scrollbar-hide">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};
export default TaskColumn;
