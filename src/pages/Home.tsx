import { useEffect, useState } from 'react';
import { ITask } from '~/@types/ITask';
import { Header } from '~/components/Header';
import { TaskForm } from '~/components/TaskForm';
import { TaskList } from '~/components/TaskList';

export function Home() {
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

  function removeTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTaskAndSave(newTasks);
  }

  function toggleTaskStatus(taskId: string) {
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
    <>
      <Header />
      <main className='space-y-4xl mx-auto flex max-w-[484px] flex-col items-center  justify-center'>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onRemoveTask={removeTaskById}
          onCompleted={toggleTaskStatus}
        />
      </main>
    </>
  );
}
