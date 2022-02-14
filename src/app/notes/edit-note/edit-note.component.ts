import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/models/note';
import { NoteService } from 'src/app/shared/services/note.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note!: Note;

  Title = '';
  Content = '';
  isValid = false;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id');
       // @ts-ignore
      this.note = this.noteService.getNote(idParam!)
    });
  }

  onSubmit(form: NgForm) {

    if(form.value.title === '' && form.value.content === '') {
      this.isValid = true;
      return;
    }
    this.noteService.updateNote(this.note.id, form.value)
    this.router.navigateByUrl('/notes')
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id)
    this.router.navigateByUrl('/notes')
  }

  checker() {
    if(this.Title.length > 0 || this.Content.length > 0) {
      this.isValid = false;
    }
  }

}
