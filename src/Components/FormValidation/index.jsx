import InputNotification from "./Components/InputNotification";
import Input from "./Components/Input";
import useInput from "../../CustomHooks/inputHooks/useInput";

const FormValidation = () => {
  const email = useInput("", {
    isEmpty: true,
    minLength: 6,
    isEmail: true,
    maxLength: 30,
  });
  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 30 });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    alert(`Fire form! Email: ${email.value} | Pass: ${password.value}`);
  };

  return (
    <div className="form-validation">
      <div className="columns">
        <div className="column is-one-third">
          <form className="form" onSubmit={(event) => handleSubmitForm(event)}>
            <h3 className="title">Form</h3>
            <Input
              type={email}
              inputType={"email"}
              title={"Email"}
              placeholder={"your_email@mail.com"}
            />
            {email.isDirty && (
              <div className="mb-2">
                <InputNotification
                  text={email.emailError.error}
                  isValid={!email.emailError.is}
                />
                <InputNotification
                  text={email.isEmpty.error}
                  isValid={!email.isEmpty.is}
                />
                <InputNotification
                  text={email.minLengthError.error}
                  isValid={!email.minLengthError.is}
                />
              </div>
            )}
            <Input
              type={password}
              inputType={"password"}
              title={"Password"}
              placeholder={"Type your password"}
            />
            {password.isDirty && (
              <div className="mb-2">
                <InputNotification
                  text={password.isEmpty.error}
                  isValid={!password.isEmpty.is}
                />
                <InputNotification
                  text={password.minLengthError.error}
                  isValid={!password.minLengthError.is}
                />
                <InputNotification
                  text={password.maxLengthError.error}
                  isValid={!password.maxLengthError.is}
                />
              </div>
            )}
            <div className="field">
              <div className="control">
                <button
                  disabled={password.formValid || email.formValid}
                  className="button is-link"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;
