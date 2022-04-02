import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './bookmarks/add-bookmark/add-bookmark.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { NotesComponent } from './notes/notes.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { EditTodoComponent } from './todos/edit-todo/edit-todo.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', component: BookmarksComponent, data: { tab: 1 }},
  {path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 }},
  {path: 'bookmarks/add', component: AddBookmarkComponent},
  {path: 'todos', component: TodosComponent, data: { tab: 2 }},
  {path: 'todos/add', component: AddTodoComponent},
  {path: 'todos/:id', component: EditTodoComponent},
  {path: 'notes', component: NotesComponent, data: { tab: 3 }},
  {path: 'notes/add', component: AddNoteComponent},
  {path: 'notes/:id', component: EditNoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
