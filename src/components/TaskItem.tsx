import { ITask } from '~/@types/ITask';

interface Props {
  task: ITask;
  onRemoveTask: (taskId: string) => void;
  onCompleted: (taskId: string) => void;
}

export const TaskItem = function TaskItemComponent({ task, onRemoveTask, onCompleted }: Props) {
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
          onChange={() => onCompleted(task.id)}
          className='ring-blue checked:(bg-purple ring-purple) h-4 w-4 cursor-pointer appearance-none rounded-full border border-transparent ring'
        />
      </div>
      <p className={`${task.isCompleted ? ' text-purple line-through' : 'text-gray-100'} mr-auto`}>{task.title}</p>
      <button
        type='button'
        title='deletar tarefa'
        onClick={() => onRemoveTask(task.id)}
        className='hover:(text-danger) flex items-center justify-center gap-2 rounded p-2 font-bold text-gray-100'
      >
        <span className='i-ph-trash h-5 w-5' />
      </button>
    </div>
  );
};
