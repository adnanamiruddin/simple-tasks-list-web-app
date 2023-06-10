import DeleteButton from "../Functions/DeleteButton";

interface ITaskItemProps {
  id: number;
  judul: string;
  deskripsi: string;
  deadline: string;
  handleDeleteTask: (id: number) => void;
}

const TaskItem = ({
  id,
  judul,
  deskripsi,
  deadline,
  handleDeleteTask,
}: ITaskItemProps) => {
  return (
    <div className="bg-stone-300 rounded-xl p-3 flex flex-col gap-4">
      <h3 className="text-2xl font-bold text-center underline break-words">
        {judul}
      </h3>
      <p className="text-justify p-2 mx-1 text-lg border-2 border-gray-700 rounded break-words">
        {deskripsi}
      </p>
      <div className="flex justify-between items-top m-2">
        <p className="text-sm italic font-bold w-36 overflow-auto">
          {deadline}
        </p>
        <DeleteButton id={id} handleDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
};

export default TaskItem;
