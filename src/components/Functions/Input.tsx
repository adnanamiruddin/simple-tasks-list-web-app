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
      className="px-3 py-5 border-4 rounded-md border-yellow-800 bg-gray-300 text-black text-lg md:py-6 md:px-4 md:text-2xl"
    />
  );
};

export default Input;
