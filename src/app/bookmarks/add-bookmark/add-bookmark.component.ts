import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/shared/models/bookmark';
import { BookmarkService } from 'src/app/shared/services/bookmark.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  name = '';
  url = '';
  isValid = false;

  constructor(private router: Router, private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {
    const {name, url} = form.value
    const bookmark = new Bookmark(name, url)
    this.bookmarkService.addBookmark(bookmark)
    this.router.navigateByUrl('/bookmarks')
  }


}
