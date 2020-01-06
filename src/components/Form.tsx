import React, { useState } from 'react';

interface ITodoFormProps {
  addTodo(text: string): void,
}

export const Form: React.FC<ITodoFormProps> = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const submitForm = (): void => {
    addTodo(input);
    setInput('');
  };

  return (
    <div className="row form wrapper-form">
      <form className="col s12" onSubmit={submitForm}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="icon_prefix2"
              className="materialize-textarea fz"
              onChange={changeInput}
              value={input}
              placeholder="Введите заметку"
            />
          </div>
        </div>
      </form>
    </div>
  )
};