import { useState } from "react";
import Input from "../Functions/Input";
import { useNavigate } from "react-router-dom";

interface ITaskInput {
  handleAddTask: (judul: string, deskripsi: string, deadline: string) => void;
}

const TaskInput = ({ handleAddTask }: ITaskInput) => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    judul: "",
    deskripsi: "",
    deadline: "",
  });

  const [status, setStatus] = useState("Please Fill in Task Details");

  const handleClickAddTask = async () => {
    setStatus("Loading...");
    await new Promise<void>((resolve) => setTimeout(resolve, 2500));
    handleAddTask(inputValue.judul, inputValue.deskripsi, inputValue.deadline);
    setStatus("Successfully Added Task");
    await new Promise<void>((resolve) => setTimeout(resolve, 3000));
    setStatus("Redirecting to Home...");
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    navigate("/");
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="px-6 flex flex-col gap-6 mt-6 pb-20"
    >
      <p className="text-center text-xl font-bold text-gray-200">{status}</p>
      <Input
        placeholder="Judul"
        handleInputTask={(value: string) => {
          setInputValue({
            judul: value,
            deskripsi: inputValue.deskripsi,
            deadline: inputValue.deadline,
          });
        }}
      />
      <Input
        placeholder="Deskripsi"
        handleInputTask={(value: string) => {
          setInputValue({
            judul: inputValue.judul,
            deskripsi: value,
            deadline: inputValue.deadline,
          });
        }}
      />
      <Input
        placeholder="Deadline"
        handleInputTask={(value: string) => {
          setInputValue({
            judul: inputValue.judul,
            deskripsi: inputValue.deskripsi,
            deadline: value,
          });
        }}
      />
      <button
        type="submit"
        onClick={() => {
          if (
            inputValue.judul.trim() === "" ||
            inputValue.deskripsi.trim() === "" ||
            inputValue.deadline.trim() === ""
          ) {
            setStatus("Failed: Fill it Completely!");
          } else {
            handleClickAddTask();
          }
        }}
        className="bg-pink-600 mt-2 py-3 font-bold text-xl rounded-lg"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
