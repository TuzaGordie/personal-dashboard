import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Todo } from 'src/app/shared/models/todo';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo!: Todo;

  Text = '';
  isValid = false;

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id');
       // @ts-ignore
      this.todo = this.todoService.getTodo(todoId!);     
    })
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
    this.todoService.updateTodo(this.todo.id, form.value)
    this.router.navigateByUrl('/todos')
  }

}
