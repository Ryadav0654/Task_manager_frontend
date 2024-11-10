import React, { useEffect, useState } from "react";
// import TaskCard from "../components/TaskCard";
import TaskColumn from "../components/TaskColumn";
import TaskStat from "../components/TaskStat";
// import Input from "../components/Input";
import Header from "../components/Header";
import { apiClient } from "../ulits/api-client";
import { GET_ALL_TASK_ROUTE } from "../ulits/constrants";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  interface Task {
    _id: string;
    title: string;
    description: string;
    deadline: string;
    priority: string;
    status: 'To Do' | 'On Progress' | 'Done';
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch tasks from the backend
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get(GET_ALL_TASK_ROUTE); // Update with the actual API endpoint
        setTasks(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        setError('Failed to fetch tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  let activeTaskCount = 0;
  let expiredTaskCount = 0;
  let doneTaskCount = 0;
  {
    tasks.map((task) => {
      if(task.status === "To Do" || task.status === "On Progress") {
        activeTaskCount++;
      }

      if(new Date(task.deadline) <= new Date()) {
        console.log(new Date(task.deadline));
        console.log("new date",new Date());
        console.log(new Date(task.deadline) < new Date());
        expiredTaskCount++;
      }

      if(task.status === "Done") {
        doneTaskCount++;
      }
    });
  }

  return (
    <div className="min-h-screen py-8 px-6 bg-white">
      <Header searchText="" />
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10">
        <aside className="col-span-1 space-y-9 ">
          <TaskStat label="Expired Tasks" count={expiredTaskCount} icon="🔴" />
          <TaskStat label="All Active Tasks" count={activeTaskCount} icon="👜" />
          <TaskStat label="Completed Tasks" count={`${doneTaskCount}/${tasks.length}`} icon="⏱️" />
          <button className="w-full py-2 bg-black text-white rounded-xl text-lg font-semibold my-6 lg:my-4 shadow-card" onClick={() => navigate("/add-task")}>
            + Add Task
          </button>
        </aside>

        <main className="col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <TaskColumn title="To Do" tasks={tasks.filter((task) => task.status === "To Do")} />
          <TaskColumn title="On Progress" tasks={tasks.filter((task) => task.status === "On Progress")} />
          <TaskColumn title="Done" tasks={tasks.filter((task) => task.status === "Done")} />
        </main>
      </div>
    </div>
  );
};


export default Dashboard;
