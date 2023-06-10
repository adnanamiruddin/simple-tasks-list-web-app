import { useState } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import { getData } from "./data/dummy_data";

const data = getData();

const App = () => {
  const [tasks, setTask] = useState(data);

  const handleClickAddTask = (
    judul: string,
    deskripsi: string,
    deadline: string
  ) => {
    const newTask = {
      id: +new Date(),
      judul,
      deskripsi,
      deadline,
    };
    setTask((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTask(filteredTasks);
  };

  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home data={tasks} handleDeleteTask={handleDeleteTask} />} />
        <Route
          path="/add"
          element={<Add handleAddTask={handleClickAddTask} />}
        />
      </Routes>
    </Routers>
  );
};

export default App;
