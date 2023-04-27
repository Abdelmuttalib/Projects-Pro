import { FC } from "react";
import { TTask } from "./Task";
import TaskColumn from "./TaskColumn";

const TaskBoard: FC<{ tasks: TTask[] }> = ({ tasks }) => {
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <TaskColumn tasks={todoTasks} title="To Do" />
        <TaskColumn tasks={inProgressTasks} title="In Progress" />
        <TaskColumn tasks={doneTasks} title="Done" />
      </div>
    </div>
  );
};

export default TaskBoard;
