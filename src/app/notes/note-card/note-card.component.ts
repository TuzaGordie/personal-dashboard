import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../shared/models/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() note: Note | undefined;

  constructor() { }

  ngOnInit(): void {
   
  }

}
