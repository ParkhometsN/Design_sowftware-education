import React, { useState } from 'react';
import MainButton from './ui/main_button.jsx';
import MainInput from './ui/input';
import ErrorAlertRed from './Alerts/ErrorAlertRED.jsx';
import SuccessAlertGreen from './Alerts/SuccessALertGreen.jsx';

function EnterAppDSW() {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({
    visible: false,
    type: '',
    message: '',
  });

  const validEmails = ['test@example.com', 'user@example.com'];

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setAlert({ visible: false, type: '', message: '' }); 
  };

  
  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setAlert({
        visible: true,
        type: 'error',
        message: 'Введите корректный email!',
      });
      return;
    }

    if (validEmails.includes(email)) {
      setAlert({
        visible: true,
        type: 'success',
        message: 'Вход выполнен успешно!',
      });
    } else {
      setAlert({
        visible: true,
        type: 'error',
        message: 'Неверный email. Попробуйте снова.',
      });
    }
    setTimeout(() => {
      setAlert({ visible: false, type: '', message: '' });
    }, 3000);
  };

  return (
    <>
        {alert.visible && alert.type === 'success' && (
            <SuccessAlertGreen TextSuccessAlert={alert.message} />
        )}
        {alert.visible && alert.type === 'error' && (
            <ErrorAlertRed TextErrorAlertRED={alert.message} />
        )}
      <div className="text-3xl">
        <p>Вход</p>
      </div>
      <MainInput
        value={email}
        onChange={handleEmailChange}
        placeholder="example@gmail.com"
      />
      <MainButton
        className="max-w-[542px] w-full"
        textbutton="Вход"
        onClick={handleLogin}
      />
    </>
  );
}

export default EnterAppDSW;