import React from 'react';
import { Iobj } from "./pages/PageList";

interface ITodoList {
  todos: Iobj[],
  toggleChecked: (id: number) => void,
  removeItem: (id: number) => void,
}

export const TodoList: React.FunctionComponent<ITodoList> = ({todos, toggleChecked, removeItem}) => {
  let classes: string[];
  const clickItem = (id: number): void => toggleChecked(id);
  const alt = <p className="center">Список дел пуст!</p>

  const list = todos.map(el => {
    if (el.completed) {
      classes = ['completed'];
    } else classes = ['default'];
    return <li key={el.id} className="item" onClick={() => clickItem(el.id)}>
      <label>
        <input
          type="checkbox"
          checked={el.completed}
          onChange={toggleChecked.bind(null, el.id)}
        />
        <span className={classes.join('')}>
          {el.text}
        </span>
        <i className="material-icons blue-text" onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.stopPropagation();
          removeItem(el.id);
        }}>
          delete_forever
        </i>
      </label>
    </li>
  });

  return (
    <ul>
      {todos.length ? list : alt}
    </ul>
  )
};