import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-dashboard';
  imageUrl: any;

  constructor(private http: HttpClient) {
  
  }

  ngOnInit() {
    this.getBackgroundUrl();
  }
  
  getBackgroundUrl() {
    this.http.get("https://api.unsplash.com/photos/random/?client_id=iWWSRuz2J3efsFzG1e-xmS3W3f16y07teYLum-sN7kM").subscribe((data: any) => {
      console.log('image', data.urls.full)
      this.imageUrl = data.urls.full;
    });
  }
}

