import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isDrity, setIsDirty] = useState(false);

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  const onBlur = (event) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
  };
};

export default useInput;
