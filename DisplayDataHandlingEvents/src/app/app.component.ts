import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Display Data Handling Events';
  imgUrl = 'https://secureservercdn.net/160.153.137.14/889.c09.myftpupload.com/wp-content/uploads/2019/06/Angular-1360x765.png';
  colSpan = 2;
  isActive = false;
  firstName;
  lastName;

  employees: any[] = [
    {
      code: 'emp101', name: 'karthik', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '25/6/1988'
    },
    {
      code: 'emp102', name: 'sachin', gender: 'Male',
      annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
      code: 'emp103', name: 'rahul', gender: 'Male',
      annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
      code: 'emp104', name: 'mary', gender: 'Female',
      annualSalary: 6500.826, dateOfBirth: '14/10/1980'
    },
  ];

  person = { firstName: 'ali', lastName: 'karami' };

  test() {
    if (this.isActive) {
      return 'blue';
    } else {
      return 'red';
    }

    // isActive ? 'blue' : 'red'
  }

  log(event: any) {
    // event.stopPropagation();
    event.preventDefault();
    console.log('>>>>>>>>>>>>>', event);
  }

  log2(event: any) {
    console.log('#####', event);
  }

  onKeyUp(event?: any) {
    // if (event.keyCode === 13) {
    console.log('****', this.firstName, this.lastName);
    // this.title = event;
    // }
  }

  onKeyUp2(event?: any) {
    if (event.keyCode === 13) {
      console.log('****', event);
    }
  }
}