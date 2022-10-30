import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { TodoContext } from '~/context/TodoContext';

export const TaskForm = function TaskFormComponent() {
  const [title, setTitle] = useState('');

  const { handleAddTask } = useContext(TodoContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  return (
    <form
      className='flex h-12 w-full justify-center gap-2'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        className='rounded-2 placeholder:(text-gray-300) h-full flex-1 border border-gray-700 bg-gray-500 p-4 text-gray-100'
        onChange={onChangeTitle}
        value={title}
      />
      <button
        type='submit'
        disabled={title.length < 3}
        className='bg-blue-dark hover:(opacity-90) flex items-center justify-center gap-2 rounded p-2 font-bold text-gray-100'
      >
        Criar
        <span className='i-ph-plus-circle h-5 w-5' />
      </button>
    </form>
  );
};
