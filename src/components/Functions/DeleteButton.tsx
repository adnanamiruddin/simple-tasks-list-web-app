interface IDeleteButton {
  id: number;
  handleDeleteTask: (id: number) => void;
}

const DeleteButton = ({ id, handleDeleteTask }: IDeleteButton) => {
  return (
    <button
      onClick={() => handleDeleteTask(id)}
      className="text-white font-bold bg-red-600 py-2 px-3 text-sm cursor-pointer rounded md:text-lg md:py-2 md:px-4"
    >
      X
    </button>
  );
};

export default DeleteButton;
