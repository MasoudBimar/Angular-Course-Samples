import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Components';


  persons = [{
    fn : 'Ali',
    ln : 'Hasani',
    dsc : 'Engeenire Man',
    img : ''
  },
  {
    fn :'Mohsen',
    ln : 'karami',
    dsc : 'Arch Man',
    img : ''
  }];

  currentDate = new Date();

  sbdTell(event){
    console.log('sobebody tell something', event);
  }
}
