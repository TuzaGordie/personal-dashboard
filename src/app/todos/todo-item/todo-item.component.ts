import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Todo } from '../../shared/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | undefined;

  @Output() editClick : EventEmitter<void> = new EventEmitter();
  @Output() deleteClick : EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.editClick.emit()
  }

  onDeleteClick() {
    this.deleteClick.emit()
  }

}
