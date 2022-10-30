import { useContext } from 'react';
import { TodoContext } from '~/context/TodoContext';
import { TaskItem } from './TaskItem';

export const TaskList = function TaskListComponent() {
  const { tasks } = useContext(TodoContext);
  const taskQuantity = tasks.length;
  const completedTask = tasks.filter(task => task.isCompleted).length;
  return (
    <section className='w-full space-y-4'>
      <header className='flex items-center justify-between text-sm'>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-blue font-bold'>Tarefas criadas</p>
          <span className='rounded-full bg-gray-400 px-2 py-1'>{taskQuantity}</span>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-purple font-bold'>Concluidas</p>
          <span className='rounded-full bg-gray-400 px-2 py-1'>
            {completedTask} de {taskQuantity}
          </span>
        </div>
      </header>
      <div className='space-y-2'>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskItem
              task={task}
              key={task.id}
            />
          ))
        ) : (
          <div className='flex flex-col items-center justify-center rounded bg-gray-500 py-4 text-gray-300'>
            <span className='i-ph-list-checks my-4 h-8 w-8 text-gray-300' />
            <p className='font-bold'>Você ainda não tem tarefas cadastradas</p>
            <p>Crie uma tarefa</p>
          </div>
        )}
      </div>
    </section>
  );
};
