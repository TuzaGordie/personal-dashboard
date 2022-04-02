import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../shared/models/bookmark';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks!: Bookmark;

  constructor() { }

  ngOnInit(): void {
  }

}
