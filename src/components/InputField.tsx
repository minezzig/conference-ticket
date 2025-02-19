interface InputFieldTypes {
    label: string,
    placeholder?: string
}

function InputField({ label, placeholder = "" }: InputFieldTypes) {
  return (
    <div className="text-white flex flex-col gap-3 mb-5">
      <label htmlFor="name">{label}</label>
      <input type="text" name="name" id="name" className="bg-transparent border border-white rounded-lg p-3" placeholder={placeholder}/>
    </div>
  );
}

export default InputField;
