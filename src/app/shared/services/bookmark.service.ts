import { Injectable } from '@angular/core';
import { Bookmark } from '../models/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[] = []

  constructor() { }

  getbookmarks() {
    return this.bookmarks
  }

  getbookmark(id: string) {
    return this.bookmarks.find(b =>  b.id === id)
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark)
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmark = this.getbookmark(id)
    Object.assign(bookmark, updatedFields)
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if (bookmarkIndex === -1) return
    this.bookmarks.splice(bookmarkIndex, 1)
  }
}
