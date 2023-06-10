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
      className="py-2.5 px-3 border-4 rounded-md border-yellow-400 bg-gray-200 text-black text-lg md:py-6 md:px-4"
    />
  );
};

export default Input;
