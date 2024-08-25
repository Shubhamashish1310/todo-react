// eslint-disable-next-line react/prop-types
function TaskCount({ count, storingTodo }) {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex items-center justify-evenly min-w-full p-2 rounded-lg shadow-lg shadow-stone-500">
        <div className="flex items-center justify-center w-16 h-16 bg-secondary text-primary-content p-8 m-1 rounded-full">
          <span className="text-3xl font-bold">{count}/{storingTodo}</span>
        </div>
        <div className="flex items-center justify-center w-full text-center">
          <p className="text-2xl font-bold text-primary">
            {count > 0 && storingTodo > 0 ? `You have completed ${count} out of ${storingTodo} tasks` : storingTodo === 0 ? 'Start adding tasks' : 'Complete all tasks'}
          </p>
        </div>
      </div>
    </div>
  );
  
  
  
}

export default TaskCount;
