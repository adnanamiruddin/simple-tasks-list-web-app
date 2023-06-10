import TaskItem from "../Elements/TaskItem";

interface ITasksListProps {
  tasks: Array<{
    id: number;
    judul: string;
    deskripsi: string;
    deadline: string;
  }>;
  handleDeleteTask: (id: number) => void;
}

const TasksList = ({ tasks, handleDeleteTask }: ITasksListProps) => {
  const isEmpty = (): boolean => {
    return tasks.length === 0;
  };

  return (
    <div className="bg-yellow-500 px-6 flex flex-col justify-center gap-8 mt-7 pb-20 md:flex-row md:flex-wrap">
      {isEmpty() ? (
        <div className="bg-stone-600 rounded-md py-6 md:px-28 md:mt-10 hover:brightness-125">
          <p className="text-2xl font-bold text-center text-white md:text-3xl">No Tasks</p>
        </div>
      ) : (
        tasks.map((task, i) => (
          <TaskItem
            key={i}
            id={task.id}
            judul={task.judul}
            deskripsi={task.deskripsi}
            deadline={task.deadline}
            handleDeleteTask={handleDeleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TasksList;
