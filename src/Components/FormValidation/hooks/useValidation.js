import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // Form validate
  useEffect(() => {
    const states = [isEmpty, minLengthError, maxLengthError, emailError];
    let flag = false;
    states.forEach((state) => {
      if (state.is) flag = true;
    });
    setFormValid(flag);
  }, [isEmpty, minLengthError, maxLengthError, emailError]);

  // Each field validate
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError({
                is: true,
                error: `Minimal field's length is ${validations.minLength}`,
              })
            : setMinLengthError({
                is: false,
                error: "Minimal field's length is good",
              });
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError({
                is: true,
                error: `Max field's length is ${validations.maxLength}`,
              })
            : setMaxLengthError({
                is: false,
                error: "Max field's length is good",
              });
          break;
        case "isEmpty":
          value
            ? setIsEmpty({
                is: false,
                error: "Field is not empty",
              })
            : setIsEmpty({
                is: true,
                error: `Field can't be empty`,
              });
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase())
            ? setEmailError({
                is: false,
                error: "Email is correct",
              })
            : setEmailError({
                is: true,
                error: "Incorrect email",
              });
          break;
        default:
          break;
      }
    }
  }, [value]);

  return { isEmpty, minLengthError, maxLengthError, emailError, formValid };
};

export default useValidation;
