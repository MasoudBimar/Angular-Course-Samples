import { TestBed } from '@angular/core/testing';

import { TodoItemService } from './to-do-module/todo-item.service';

describe('TodoItemService', () => {
  let service: TodoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
