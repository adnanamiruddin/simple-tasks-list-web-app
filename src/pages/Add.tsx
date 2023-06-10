import { Link } from "react-router-dom";
import TaskInput from "../components/Layouts/TaskInput";

interface IAdd {
  handleAddTask: (judul: string, deskripsi: string, deadline: string) => void;
}

const Add = ({ handleAddTask }: IAdd) => {
  return (
    <div className="bg-green-600 w-full h-screen pt-10">
      <Link
        to="/"
        className="absolute left-3 top-3 bg-stone-300 p-1 rounded-md font-semibold"
      >
        Back
      </Link>
      <h1 className="text-4xl font-bold italic text-center">Add New Task</h1>
      <TaskInput handleAddTask={handleAddTask} />
    </div>
  );
};

export default Add;
