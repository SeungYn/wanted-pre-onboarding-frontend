export default function authForm() {
  return (
    <form>
      <input data-testid='email-input' />
      <input data-testid='password-input' />
      <button data-testid='signup-button'>회원가입</button>
    </form>
  );
}
