import React from 'react';
import { useHistory } from 'react-router-dom';

export const Contacts: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Дмитрий</h1>
      <p>phone:+ 375(29)891-33-93</p>
      <p>mail: gaydamovich1992@mail.ru</p>
      <button
        className="btn"
        onClick={() => history.push('/')}
      >Back to list
      </button>
    </div>
  )
};