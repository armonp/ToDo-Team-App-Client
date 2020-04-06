import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListUserComponent } from './todo-list-user.component';

describe('TodoListUserComponent', () => {
  let component: TodoListUserComponent;
  let fixture: ComponentFixture<TodoListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
