import { Link } from "react-router-dom";
import TaskInput from "../components/Layouts/TaskInput";

interface IAdd {
  handleAddTask: (judul: string, deskripsi: string, deadline: string) => void;
}

const Add = ({ handleAddTask }: IAdd) => {
  return (
    <div className="bg-yellow-500 brightness-105 w-full h-screen pt-10 overflow-hidden">
      <Link
        to="/"
        className="absolute left-3 top-3 bg-stone-300 text-sm p-1 rounded-md font-bold md:left-5 md:top-5 md:p-2.5 md:pt-2 md:text-xl hover:brightness-75"
      >
        Back
      </Link>
      <h1 className="text-4xl font-black text-center tracking-wider md:text-6xl">
        Add New Task
      </h1>
      <TaskInput handleAddTask={handleAddTask} />
    </div>
  );
};

export default Add;
