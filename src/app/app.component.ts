import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        style({
          position: 'relative',
          overflow: 'hidden'
        }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], {optional: true}),

        group([
          query(':leave', [
            animate('250ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-80px)'
            }))
          ], {optional: true}),
  
          query(':enter', [
            style({
              transform: 'translateX(80px)',
              opacity: '0'
            }),
            animate('250ms 100ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ], {optional: true}),
        ]),
      ]),

      transition(':decrement', [
        style({
          position: 'relative',
          overflow: 'hidden'
        }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], {optional: true}),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'translateX(80px)'
            }))
          ], {optional: true}),
  
          query(':enter', [
            style({
              transform: 'translateX(-80px)',
              opacity: '0'
            }),
            animate('200ms 100ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ], {optional: true}),
        ]),
      ])
    ])
  ]
})
export class AppComponent {
  imageUrl: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBackgroundUrl();
  }
  
  getBackgroundUrl() {
    this.http.get("https://api.unsplash.com/photos/random/?client_id=iWWSRuz2J3efsFzG1e-xmS3W3f16y07teYLum-sN7kM")
    .subscribe((data: any) => {
      this.imageUrl = data.urls.full;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    if(outlet.isActivated) {
      return outlet.activatedRouteData['tab']
    }
  }

}

