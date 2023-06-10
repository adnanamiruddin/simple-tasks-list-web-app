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
  return (
    <div className="bg-yellow-500 px-6 flex flex-col gap-8 mt-6 pb-20">
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          id={task.id}
          judul={task.judul}
          deskripsi={task.deskripsi}
          deadline={task.deadline}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
