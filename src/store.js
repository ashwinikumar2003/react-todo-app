import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';

// Load initial tasks from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save tasks to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch (err) {
    // Handle errors
  }
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: loadState(), // Load initial state from local storage
});

store.subscribe(() => {
  saveState(store.getState().todos); // Save tasks to local storage on state changes
});

export default store;