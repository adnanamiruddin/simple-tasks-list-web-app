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
      <h1 className="text-4xl font-bold text-center tracking-wider md:text-6xl">
        My Tasks List
      </h1>
      <p className="text-center mt-2.5 font-semibold text-sm text-gray-100 tracking-widest md:text-lg">
        Created by @Adnan
      </p>
      <TasksList tasks={data} handleDeleteTask={handleDeleteTask} />
      <Link
        to="/add"
        className="bg-green-600 fixed bottom-4 right-2 p-2 pt-0.5 font-bold text-2xl rounded-lg cursor-pointer md:text-5xl md:p-4 md:pt-0.5 md:bottom-8 md:right-9"
      >
        +
      </Link>
    </div>
  );
};

export default Home;
