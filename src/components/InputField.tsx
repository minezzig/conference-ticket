interface InputFieldTypes {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean
}



function InputField({ label, name, value, placeholder = "", onChange, error }: InputFieldTypes) {

  return (
    <div className="text-neutral2 mb-5 flex flex-col gap-3">
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        className="hover:bg-neutral4 focus:outline-neutral2 border-neutral3 text-neutral1 bg-neutral4/30 rounded-lg border p-3 backdrop-blur-xs focus:outline focus:outline-offset-3"
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && !value && <div className="text-orange1 flex text-xs gap-1 items-center">
        <img src="/images/icon-info.svg" alt="info" className="invert-[52%] sepia-[44%] saturate-[1338%] hue-rotate-[325deg] brightness-[91%] contrast-[93%]"/>
        Please enter a valid {label}
      </div>}
    </div>
  );
}

export default InputField;
