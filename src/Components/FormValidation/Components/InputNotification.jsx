const InputNotification = ({ text, isValid }) => {
  return (
    <p className={isValid ? "help is-success" : "help is-danger"}>{text}</p>
  );
};

export default InputNotification;
