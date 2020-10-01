import Todo from '../models/Todo';
import { todoReducer } from './todos.reducer';

export interface State {
  todos: Todo[];
}

export const reducers = {
  todos: todoReducer,
};
