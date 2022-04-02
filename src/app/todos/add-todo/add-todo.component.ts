import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Todo } from 'src/app/shared/models/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  Text = '';
  isValid = false;

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  checker() {
    if(this.Text.length > 0) {
      this.isValid = false;
    }
  }

  onSubmit(form: NgForm) {

    if(form.value.text === '') {
      this.isValid = true;
      return;
    }
    const todo = new Todo(form.value.text, false)
    this.todoService.addTodo(todo)
    this.router.navigateByUrl('/todos')
  }

}
