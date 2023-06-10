import TasksList from "../components/Layouts/TasksList";
import { Link } from "react-router-dom";

interface IHomeProps {
  data: Array<{
    id: number;
    judul: string;
    deskripsi: string;
    deadline: string;
  }>;
  handleDeleteTask: (id: number) => void;
}

const Home = ({ data, handleDeleteTask }: IHomeProps) => {
  return (
    <div className="bg-yellow-500 w-full h-screen pt-10">
      <h1 className="text-4xl font-bold italic text-center md:text-6xl">My Tasks List</h1>
      <p className="text-center mt-2.5 font-semibold text-sm text-gray-100 md:text-base">Created by @Adnan</p>
      <TasksList tasks={data} handleDeleteTask={handleDeleteTask} />
      <Link
        to="/add"
        className="bg-green-600 fixed bottom-4 right-5 p-3 font-bold text-base rounded-lg cursor-pointer md:text-xl md:bottom-8 md:right-8"
      >
        Add Task
      </Link>
    </div>
  );
};

export default Home;
