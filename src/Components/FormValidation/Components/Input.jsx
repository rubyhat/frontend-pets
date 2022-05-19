const Input = (props) => {
  const { type, title, inputType, placeholder } = props;

  return (
    <div className="field">
      <label className="label">{title}</label>
      <div className="control">
        <input
          value={type.value}
          onChange={(event) => type.onChange(event)}
          onBlur={() => type.onBlur()}
          name={title}
          className="input"
          type={inputType}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
