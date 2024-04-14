// Define action types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';

// Action creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: id,
});
