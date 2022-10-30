import { TaskItem } from './TaskItem';

export const TaskList = function TaskListComponent() {
  return (
    <section className='w-full space-y-4'>
      <header className='flex items-center justify-between text-sm'>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-blue font-bold'>Tarefas criadas</p>
          <span className='rounded-full bg-gray-400 px-2 py-1'>18</span>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-purple font-bold'>Concluidas</p>
          <span className='rounded-full bg-gray-400 px-2 py-1'>2 de 10</span>
        </div>
      </header>
      <div className='space-y-2'>
        <TaskItem />
        <TaskItem />
      </div>
    </section>
  );
};
