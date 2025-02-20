interface InputFieldTypes {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  name,
  value,
  placeholder = "",
  onChange,
}: InputFieldTypes) {
  return (
    <div className="text-neutral2 mb-5 flex flex-col gap-3">
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        className="focus:outline focus:outline-neutral2 focus:outline-offset-3 border-neutral3 text-neutral1 rounded-lg border bg-neutral4/30 p-3 backdrop-blur-xs"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
