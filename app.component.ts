import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//provide the binding of data with the view
//generating the view
export class AppComponent {
  title = 'Vignesh is the best';
  card = '../assets/tiger.png';
  choice = false;
  show(){
    alert('button clicked');
  }
}
