const CustomInput = (props) => {
  const { type, id, placeholder, className, name, value, onChange } = props;

  return (
    <div className="relative">
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
