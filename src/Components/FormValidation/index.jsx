import useInput from "./hooks/useInput";

const FormValidation = () => {
  const email = useInput("");
  const password = useInput("");
  return (
    <div className="form-validation">
      <div className="columns">
        <div className="column is-one-third">
          <form className="form">
            <h3 className="title">Form</h3>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  value={email.value}
                  onChange={(event) => email.onChange(event)}
                  onBlur={(event) => email.onBlur(event)}
                  name="email"
                  class="input"
                  type="text"
                  placeholder="your_email@mail.com"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  value={password.value}
                  onChange={(event) => password.onChange(event)}
                  onBlur={(event) => password.onBlur(event)}
                  name="password"
                  class="input"
                  type="password"
                  placeholder="Type your password"
                />
              </div>
            </div>
            <div className="field">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;
