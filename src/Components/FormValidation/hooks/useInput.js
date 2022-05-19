import { useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

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
    isDirty,
    ...valid,
  };
};

export default useInput;
