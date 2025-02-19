interface InputFieldTypes {
    label: string,
    name: string,
    value: string,
    placeholder?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputField({ label,name, value, placeholder = "", onChange }: InputFieldTypes) {
  return (
    <div className="text-white flex flex-col gap-3 mb-5">
      <label htmlFor="name">{label}</label>
      <input type="text" name={name} id={name} value={value} className="bg-transparent border border-white rounded-lg p-3" placeholder={placeholder} onChange={onChange}/>
    </div>
  );
}

export default InputField;
