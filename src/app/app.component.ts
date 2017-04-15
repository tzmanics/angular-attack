import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Winning App';
  private items: any[] = [{
    name: "puppies",
    data: [3, .65, 2, .50]
  },{
    name: "bunnies",
    data: [2, 1, .25, 3]
  },{
    name: "snakes",
    data: [1, .5, 1, .5]
  }];
}
