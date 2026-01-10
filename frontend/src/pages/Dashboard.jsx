import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { taskAPI } from '../services/api';
import TaskList from '../components/TaskList';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const { data } = await taskAPI.getTasks();
      setTasks(data.data || []);
    } catch (error) {
      console.error('Fetch tasks error:', error);
      toast.error('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) {
      toast.error('Task title is required');
      return;
    }
    
    try {
      await taskAPI.createTask(newTask);
      setNewTask({ title: '', description: '' });
      fetchTasks();
      toast.success('Task created successfully!');
    } catch (error) {
      toast.error('Failed to create task');
    }
  };

  const refreshTasks = () => fetchTasks();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="glass p-8 rounded-xl text-center max-w-sm mx-auto">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-300">Loading your tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      
      <div className="max-w-2xl mx-auto p-8 pt-0">
        {/* Header */}
        <div className="text-center my-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            My Tasks
          </h1>
          <p className="text-gray-400 text-lg">({tasks.length} tasks)</p>
        </div>

        {/* Create New Task */}
        <div className="glass p-8 rounded-2xl mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-white">Add New Task</h2>
          <form onSubmit={createTask} className="space-y-4">
            <div>
              <input
                type="text"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 text-lg"
                placeholder="What needs to be done?"
                required
              />
            </div>
            <div>
              <textarea
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Description (optional)"
                rows="3"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 p-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Create Task
            </button>
          </form>
        </div>

        {/* Task List */}
        <TaskList tasks={tasks} refresh={refreshTasks} />
      </div>
    </div>
  );
}
