export const TaskItem = function TaskItemComponent() {
  return (
    <div className='flex items-center justify-between gap-4 rounded bg-gray-500 p-4'>
      <div>
        <label
          htmlFor='checkTask'
          className='sr-only'
        >
          Concluir tarefa
        </label>
        <input
          type='checkbox'
          id='checkTask'
          className='ring-blue checked:(bg-purple ring-purple) h-4 w-4 appearance-none rounded-full border border-transparent ring'
        />
      </div>
      <p className='mr-auto text-gray-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button
        type='button'
        title='deletar tarefa'
        className='hover:(text-danger) flex items-center justify-center gap-2 rounded p-2 font-bold text-gray-100'
      >
        <span className='i-ph-trash h-5 w-5' />
      </button>
    </div>
  );
};
