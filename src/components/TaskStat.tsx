import React from 'react'

interface TaskStatProps {
    label: string;
    count: number | string;
    icon: string;
  }
  
  const TaskStat: React.FC<TaskStatProps> = ({ label, count, icon }) => {
    return (
      <div className="flex items-center p-4 bg-[#ecedee] rounded-lg space-x-8 lg:space-x-4 h-[20vh] shadow-card ">
        <span className="text-6xl lg:text-4xl ">{icon}</span>
        <div>
          <p className="text-xl text-gray-500 ">{label}</p>
          <p className="text-3xl font-bold text-center">{count}</p>
        </div>
      </div>
    );
  };

export default TaskStat