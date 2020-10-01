import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTodoAction } from './store/actions/todos.action';
import Todo from './store/models/Todo';
import { State } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select((state) => state.todos);
  }

  addTodo() {
    this.store.dispatch(new AddTodoAction({ id: '2', title: 'Second' }));
  }
}
