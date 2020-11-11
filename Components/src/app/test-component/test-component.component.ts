import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  // public person: Person = {firstName: 'ali', lastName: 'karimi'};
  // @Input() firstName: string = 'someone';
  // @Input()  lastName: string = 'someone';
  // @Input()  desc: string = 'someone';
  // @Input()  imgUrl: string = '';
  @Input('persons') personList: Person[];
  @Output('tell') raiseEvent = new  EventEmitter();
  currentPerson;


  constructor() { }

  ngOnInit(): void {
  }

  tellWhoIAm(event) {
    console.log('curr' , event);
    this.raiseEvent.emit(event);
  }

}
