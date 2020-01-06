import React, { useEffect, useState } from 'react';
import { Form } from "../Form";
import { TodoList } from "../TodoList";

export interface Iobj {
  id: number,
  text: string,
  completed: boolean,
}

export const PageList: React.FC = () => {
  const [todos, setTodos] = useState<Iobj[]>([]);

  const addTodo = (text: string): void => {
    const obj: Iobj = {
      id: Date.now(),
      text,
      completed: false,
    };
    if (text.trim()) {
      setTodos([obj, ...todos]);
    } else {
      window.alert('введите задачу')
    }
  };

  const toggleChecked = (id: number): void => {
    setTodos((prev) => prev.map(el => {
        if (el.id === id) el.completed = !el.completed;
        return el;
      })
    );
  };

  const removeItem = (id: number) => {
    todos.forEach( el => {
      if (el.id === id && !el.completed) {
        const response: boolean = window.confirm('Вы действительно сделали это дело?');
        if (response) {
          setTodos((prev) => prev.filter( el => el.id !== id))
        } else return 0
      } else if (el.id === id && el.completed) {
        setTodos((prev) => prev.filter( el => el.id !== id))
      }
    });
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('todos') || '[]') as Iobj[];
    setTodos(list);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Form addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleChecked={toggleChecked}
        removeItem={removeItem}
      />
    </>
  )
};