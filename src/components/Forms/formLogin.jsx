import "./forms.css";

function FormLogin() {
  return (
    <div className="form-login">
      <input
        class="form-email-password"
        type="email"
        placeholder="Email | Ex: julia@prettywoman.com"
      />
       <input
        class="form-email-password"
        type="password"
        placeholder="Password | Validation text to add"
      />
    </div>
  );
}

export default FormLogin;
