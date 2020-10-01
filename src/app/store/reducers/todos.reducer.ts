import Todo from '../models/Todo';
import { TodoAction, TodoActionTypes } from '../actions/todos.action';

const initialState: Todo[] = [{ id: '1', title: 'First' }];

export function todoReducer(state: Todo[] = initialState, action: TodoAction) {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
