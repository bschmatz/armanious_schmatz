import { useState } from 'react';
import { Plus, Trash2, Edit2, Check, X } from 'lucide-react';
import './TaskList.css';

const ErrorAlert = ({ children }) => (
  <div className="error-alert" role="alert">
    <p>Error</p>
    <p>{children}</p>
  </div>
);

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [error, setError] = useState('');

  const addTask = () => {
    if (!newTask.trim()) {
      setError('Task cannot be empty');
      return;
    }
    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, task]);
    setNewTask('');
    setError('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) {
      setError('Task cannot be empty');
      return;
    }
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: editText.trim() } : task
    ));
    setEditingId(null);
    setEditText('');
    setError('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  return (
    <div className="task-container" data-testid="task-list">
      <div className="task-wrapper">
        <div className="task-card">
          <div className="task-header">
            <h1>Task Manager</h1>
            <p>Organize your tasks efficiently (TEST)</p>
          </div>
          
          <div className="task-content">
            <div className="task-input-group">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, addTask)}
                placeholder="Add new task..."
                className="task-input"
                data-testid="new-task-input"
              />
              <button
                onClick={addTask}
                className="add-button"
                data-testid="add-task-button"
              >
                <Plus size={24} />
              </button>
            </div>

            {error && <ErrorAlert>{error}</ErrorAlert>}

            <ul className="task-list">
              {tasks.map(task => (
                <li
                  key={task.id}
                  className="task-item"
                  data-testid="task-item"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="task-checkbox"
                    data-testid="task-checkbox"
                  />
                  
                  {editingId === task.id ? (
                    <div className="task-edit-group">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e, () => saveEdit(task.id))}
                        className="task-edit-input"
                        data-testid="edit-task-input"
                      />
                      <button
                        onClick={() => saveEdit(task.id)}
                        className="action-button save-button"
                        data-testid="save-edit-button"
                      >
                        <Check size={20} />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="action-button cancel-button"
                        data-testid="cancel-edit-button"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                        {task.text}
                      </span>
                      <div className="task-actions">
                        <button
                          onClick={() => startEdit(task)}
                          className="action-button edit-button"
                          data-testid="edit-button"
                        >
                          <Edit2 size={20} />
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="action-button delete-button"
                          data-testid="delete-button"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
            
            {tasks.length === 0 && (
              <div className="empty-message">
                <p>No tasks yet. Add your first task above!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;