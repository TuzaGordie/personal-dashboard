import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  notes: Note[] = [
    new Note('Test title', 'Test content'),
    new Note('Second title', 'second content')
  ];

  constructor() { }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find((n: { id: string; }) => n.id === id)
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(id: string, updatedFields: Partial<Note>) {
    const note = this.getNote(id)
    Object.assign(note, updatedFields)
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n: { id: string; }) => n.id === id)
    if(noteIndex === -1) return
    this.notes.splice(noteIndex, 1)
  }


}
