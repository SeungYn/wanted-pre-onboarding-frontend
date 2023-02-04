import { useEffect } from 'react';
import styles from './AuthForm.module.css';
export default function AuthForm(props) {
  const { handleSubmit, type, onChange, authForm, resetForm } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!authForm.email || !authForm.password)
      return alert('아이디와 비밀번호를 올바르게 입력해주세요.');

    if (!authForm.email.includes('@') || authForm.password.length < 8)
      return alert(
        '아이디는 이메일 형식 비밀번호는 8자리 이상으로 입력해주세요'
      );
    handleSubmit({ email: authForm.email, password: authForm.password });
  };

  useEffect(() => {
    resetForm();
  }, [type, resetForm]);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type='email'
        name='email'
        data-testid='email-input'
        value={authForm.email}
        placeholder='email'
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='password'
        name='password'
        data-testid='password-input'
        value={authForm.password}
        placeholder='password'
        onChange={onChange}
      />
      <button
        className={styles.button}
        data-testid={type === 'signup' ? 'signup-button' : 'signup-button'}
        disabled={!authForm.emailValidation || !authForm.passwordValidation}
      >
        {type === 'signup' ? '회원가입' : '로그인'}
      </button>
    </form>
  );
}
