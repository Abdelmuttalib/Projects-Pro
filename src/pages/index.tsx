import { TTask } from "@/components/@pages/home/board/Task";
import TaskBoard from "@/components/@pages/home/board/TaskBoard";
import Layout from "@/components/layout/Layout";

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
    description: "Design a landing page for the website using Figma or Sketch.",
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

export default function Home() {
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
