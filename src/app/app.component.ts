import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShow = false;

  toggleToDo(){
    this.isShow = true;
  }
  toggleUsers(){
    this.isShow = false;
  }
}
