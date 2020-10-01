import { Action } from '@ngrx/store';
import Todo from '../models/Todo';

export enum TodoActionTypes {
  ADD_TODO = '[TODO] ADD',
}

export class AddTodoAction implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(public payload: Todo) {}
}

export type TodoAction = AddTodoAction;
