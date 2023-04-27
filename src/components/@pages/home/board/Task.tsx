import { FC } from "react";

export type TTask = {
  id: number;
  title: string;
  description: string;
  assigneeName: string;
  assigneeAvatarUrl: string;
  status: string;
};

const Task: FC<{ task: TTask }> = ({ task }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white">
      <h3 className="font-bold text-lg mb-2">{task.title}</h3>
      <p className="text-gray-700">{task.description}</p>
      <div className="flex justify-between items-center gap-2 mt-4">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-2 object-cover"
            src={task.assigneeAvatarUrl}
            alt="Assignee avatar"
          />
          <span className="text-gray-700">{task.assigneeName}</span>
        </div>
        <span
          className={`px-2 py-1 rounded-full font-bold text-sm ${
            task.status === "done"
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {task.status}
        </span>
      </div>
    </div>
  );
};

export default Task;
