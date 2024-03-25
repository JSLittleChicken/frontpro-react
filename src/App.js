import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import Task from './components/Task/Task';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: 'Сходити за покупками',
      done: true
    },
    {
      name: 'Зробити домашнє завдання',
      done: true
    },
    {
      name: 'Погратися з котом',
      done: true
    },
    {
      name: 'Тренування',
      done: false
    },
    {
      name: 'Забрати речі з хімчистки',
      done: false
    },
    {
      name: 'Похвалити себе',
      done: false
    },
]);

  function addTask(name) {
    setTasks(prev => {
      return [...prev, { name: name, done: false }];
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  return (
    <div className='container'>
      <h1>My todo list</h1>
      {tasks.map((task, index) => (
        <Task {...task}
          onToggle={done => updateTaskDone(index, done)} />
      ))}

      <ToDoForm onAdd={addTask} />
    </div>
  );
}

export default App;