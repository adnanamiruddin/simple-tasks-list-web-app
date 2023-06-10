interface IInputProps {
  placeholder: string;
  handleInputTask: (value: string) => void;
}

const Input = ({ placeholder, handleInputTask }: IInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => {
        const value = e.target.value;
        handleInputTask(value);
      }}
      className="py-2.5 px-3 border-4 border-yellow-500 bg-gray-200 text-black text-lg"
    />
  );
};

export default Input;
