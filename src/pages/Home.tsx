import { Header } from '~/components/Header';
import { TaskForm } from '~/components/TaskForm';
import { TaskList } from '~/components/TaskList';
import { TodoProvider } from '~/context/TodoContext';

export function Home() {
  return (
    <>
      <Header />
      <main className='space-y-4xl mx-auto flex max-w-[484px] flex-col items-center  justify-center'>
        <TodoProvider>
          <TaskForm />
          <TaskList />
        </TodoProvider>
      </main>
    </>
  );
}
