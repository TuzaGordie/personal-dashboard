import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/models/note';
import { NoteService } from 'src/app/shared/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  Title = '';
  Content = '';
  isValid = false;

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if(form.value.title === '' && form.value.content === '') {
      this.isValid = true;
      return;
    }
    const note = new Note(form.value.title, form.value.content)
    this.noteService.addNote(note);
    this.router.navigateByUrl('/notes')
  }

  checker() {
    if(this.Title.length > 0 || this.Content.length > 0) {
      this.isValid = false;
    }
  }

}
