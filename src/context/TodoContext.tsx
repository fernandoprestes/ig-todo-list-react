import { createContext, ReactNode, useEffect, useState } from 'react';
import { ITask } from '~/@types/ITask';

interface TodoContextType {
  tasks: ITask[];
  handleAddTask: (taskTitle: string) => void;
  handleRemoveTask: (taskId: string) => void;
  handleCompleteTask: (taskId: string) => void;
}

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext({} as TodoContextType);

export function TodoProvider({ children }: TodoProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function setTaskAndSave(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem('todo:ig-react', JSON.stringify(newTasks));
  }

  function initTasks() {
    const tasksSaved = localStorage.getItem('todo:ig-react');
    if (tasksSaved) {
      setTasks(JSON.parse(tasksSaved));
    }
  }

  function handleAddTask(taskTitle: string) {
    setTaskAndSave([...tasks, { id: crypto.randomUUID(), title: taskTitle, isCompleted: false }]);
  }

  function handleRemoveTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTaskAndSave(newTasks);
  }

  function handleCompleteTask(taskId: string) {
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskAndSave(newTask);
  }

  useEffect(() => {
    initTasks();
  }, []);

  return (
    <TodoContext.Provider value={{ tasks, handleAddTask, handleRemoveTask, handleCompleteTask }}>
      {children}
    </TodoContext.Provider>
  );
}
