import InputNotification from "./Components/InputNotification";
import useInput from "./Hooks/useInput";

const FormValidation = () => {
  const email = useInput("", {
    isEmpty: true,
    minLength: 6,
    isEmail: true,
    maxLength: 30,
  });
  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 30 });
  return (
    <div className="form-validation">
      <div className="columns">
        <div className="column is-one-third">
          <form className="form">
            <h3 className="title">Form</h3>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  value={email.value}
                  onChange={(event) => email.onChange(event)}
                  onBlur={(event) => email.onBlur(event)}
                  name="email"
                  className="input"
                  type="text"
                  placeholder="your_email@mail.com"
                />
              </div>

              {email.isDirty && (
                <>
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
                </>
              )}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  value={password.value}
                  onChange={(event) => password.onChange(event)}
                  onBlur={(event) => password.onBlur(event)}
                  name="password"
                  className="input"
                  type="password"
                  placeholder="Type your password"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  disabled={password.formValid || email.formValid}
                  className="button is-link"
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
