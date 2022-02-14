import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', component: BookmarksComponent, data: { tab: 1 }},
  {path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 }},
  {path: 'todos', component: TodosComponent, data: { tab: 2 }},
  {path: 'notes', component: NotesComponent, data: { tab: 3 }},
  {path: 'notes/add', component: AddNoteComponent},
  {path: 'notes/:id', component: EditNoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
