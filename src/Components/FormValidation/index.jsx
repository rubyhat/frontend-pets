const FormValidation = () => {
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
