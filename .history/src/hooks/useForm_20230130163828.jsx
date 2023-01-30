export default function useForm() {
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    emailValidation: false,
    passwordValidation: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        // 이메일 유효성 검사
        const valid = value.includes('@');
        if (valid) setAuthForm((form) => ({ ...form, emailValidation: true }));
        else setAuthForm((form) => ({ ...form, emailValidation: false }));

        return setAuthForm((form) => ({ ...form, email: value }));
      case 'password':
        // 비밀번호 유효성 검사
        if (value.length >= 8)
          setAuthForm((form) => ({ ...form, passwordValidation: true }));
        else setAuthForm((form) => ({ ...form, passwordValidation: false }));

        return setAuthForm((form) => ({ ...form, password: value }));
      default:
        return;
    }
  };
  return { authForm, onChange };
}
