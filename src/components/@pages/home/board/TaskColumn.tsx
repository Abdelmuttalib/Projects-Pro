import { FC } from "react";
import Task, { TTask } from "./Task";

const TaskColumn: FC<{ tasks: TTask[]; title: string }> = ({
  tasks,
  title,
}) => {
  return (
    <div className="w-full lg:w-1/3 p-4 bg-gray-100/80">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
