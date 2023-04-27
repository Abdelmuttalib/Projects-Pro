import Layout from "@/components/layout/Layout";
import { FC, ReactNode } from "react";

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

type TTask = {
  id: number;
  title: string;
  description: string;
  assigneeName: string;
  assigneeAvatarUrl: string;
  status: string;
};

export default function Home() {
  const tasks: TTask[] = [
    {
      id: 1,
      title: "Implement user authentication",
      description:
        "Create a user authentication system using Firebase Authentication.",
      assigneeName: "John Doe",
      assigneeAvatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      status: "todo",
    },
    {
      id: 2,
      title: "Design landing page",
      description:
        "Design a landing page for the website using Figma or Sketch.",
      assigneeName: "Jane Smith",
      assigneeAvatarUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      status: "todo",
    },
    {
      id: 3,
      title: "Setup Redux store",
      description: "Setup Redux store for managing state in the application.",
      assigneeName: "John Doe",
      assigneeAvatarUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      status: "inProgress",
    },
    {
      id: 4,
      title: "Implement task board UI",
      description: "Implement the task board UI using React and Tailwind CSS.",
      assigneeName: "Jane Smith",
      assigneeAvatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      status: "inProgress",
    },
    {
      id: 5,
      title: "Add unit tests",
      description: "Add unit tests for the application using Jest and Enzyme.",
      assigneeName: "John Doe",
      assigneeAvatarUrl:
        "https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      status: "done",
    },
    {
      id: 6,
      title: "Deploy application to AWS",
      description: "Deploy the application to AWS using EC2 and S3.",
      assigneeName: "Jane Smith",
      assigneeAvatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      status: "done",
    },
  ];

  return (
    <Layout pageTitle="Home">
      <main className="flex w-full flex-col items-center justify-center pb-10">
        {/* <GradientBackground>
          <h1 className="text-8xl font-bold text-gray-900">Home</h1>
        </GradientBackground> */}
        <TaskBoard tasks={tasks} />
      </main>
    </Layout>
  );
}
