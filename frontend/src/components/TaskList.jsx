import { taskAPI } from '../services/api';
import { toast } from 'react-hot-toast';

export default function TaskList({ tasks, refresh }) {
  const toggleTask = async (task) => {
    try {
      await taskAPI.updateTask(task._id, { 
        status: task.status === 'pending' ? 'completed' : 'pending' 
      });
      refresh();
      toast.success('Task updated');
    } catch {
      toast.error('Update failed');
    }
  };

  const deleteTask = async (id) => {
    if (!confirm('Delete this task?')) return;
    try {
      await taskAPI.deleteTask(id);
      refresh();
      toast.success('Task deleted');
    } catch {
      toast.error('Delete failed');
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="glass p-12 text-center rounded-xl border-2 border-dashed border-gray-600">
        <p className="text-gray-400 text-lg">No tasks yet</p>
        <p className="text-gray-500 text-sm mt-2">Create your first task above</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task._id} className="glass p-6 rounded-xl hover:bg-gray-800/50 transition-all group">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              {/* Task Checkbox */}
              <div className="flex items-center gap-3 mb-3">
                <button
                  onClick={() => toggleTask(task)}
                  className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all font-medium text-sm ${
                    task.status === 'completed'
                      ? 'bg-green-600 border-green-600 text-white shadow-md'
                      : 'border-gray-500 hover:border-green-500 hover:bg-green-500/20'
                  }`}
                >
                  {task.status === 'completed' ? '✓' : '○'}
                </button>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  task.status === 'completed' 
                    ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                    : 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                }`}>
                  {task.status}
                </span>
              </div>

              {/* Task Content */}
              <h3 className={`font-semibold text-lg mb-2 pr-20 ${
                task.status === 'completed' ? 'line-through text-gray-500' : 'text-white'
              }`}>
                {task.title}
              </h3>
              {task.description && (
                <p className="text-gray-400 text-sm leading-relaxed">{task.description}</p>
              )}
            </div>

            {/* Delete Button */}
            <button
              onClick={() => deleteTask(task._id)}
              className="p-2 -mr-2 opacity-0 group-hover:opacity-100 hover:bg-red-600/30 hover:text-red-400 rounded-xl transition-all ml-auto"
              title="Delete task"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m7-10V4a1 1 0 00-1-1h-4M9 3V2a1 1 0 00-1-1H4a1 1 0 00-1 1v1M21 7h-6" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
