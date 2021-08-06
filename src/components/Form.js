import React from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = React.useState('');
  const alert = React.useContext(AlertContext);
  const firebase = React.useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show('Заметка была создана', 'success');
        })
        .catch(() => {
          alert.show('Что-то пошло не так', 'danger');
        });

      setValue('');
    } else {
      alert.show('Поле не может быть пустым');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="form-control"
          placeholder="Введите название заметки"
        />
      </div>
    </form>
  );
};
