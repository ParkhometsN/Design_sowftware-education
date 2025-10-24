import React, { useState, useEffect } from 'react';
import MainButton from './ui/main_button.jsx';
import MainInput from './ui/input';
import ErrorAlertRed from './Alerts/ErrorAlertRED.jsx';
import SuccessAlertGreen from './Alerts/SuccessALertGreen.jsx';
import axios from "axios";

function EnterAppDSW({onLoginSuccess}) {
  const [email, setEmail] = useState('');
  const [allEmails, setAllEmails] = useState([]); // Добавляем состояние для хранения email'ов
  const [alert, setAlert] = useState({
    visible: false,
    type: '',
    message: '',
  });

  // Используем useEffect для загрузки данных при монтировании компонента
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users').then(r => {
      const arrayOfUsers = r.data.data;
      const emails = arrayOfUsers.map(user => {
        return user.email;
      });
      setAllEmails(emails); // Сохраняем email'ы в состоянии
      console.log(emails);
    }).catch(error => {
      console.error('Ошибка при загрузке пользователей:', error);
    });
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании

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

    if (allEmails.includes(email)) {
      setAlert({
        visible: true,
        type: 'success',
        message: 'Вход выполнен успешно!',
      });
      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      }, 500); 
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
            <SuccessAlertGreen
             TextSuccessAlert={alert.message}
             className='positionalerts' />
        )}
        {alert.visible && alert.type === 'error' && (
            <ErrorAlertRed 
            TextErrorAlertRED={alert.message}
            className='positionalerts' />
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
        textbutton={"Вход"}
        type='submit' // Исправлена опечатка
        onClick={handleLogin}
      />
    </>
  );
}

export default EnterAppDSW;