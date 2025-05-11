import "./forms.css";

function FormLogin() {
  return (
    <form className="form-login">
      <input
        class="form-email-password"
        type="email"
        placeholder="Email"
      />
       <input
        class="form-email-password"
        type="password"
        placeholder="Password"
      />
    </form>
  );
}

export default FormLogin;
