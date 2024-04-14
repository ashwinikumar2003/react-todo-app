import { ADD_TODO, DELETE_TODO, MARK_COMPLETED } from '../actions/todoActions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case MARK_COMPLETED:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
