import React from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
  const { alert, hide } = React.useContext(AlertContext);

  if (!alert.visible) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Внимание!</strong>
      &nbsp;{alert.text}
      <button
        onClick={hide}
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"></button>
    </div>
  );
};
