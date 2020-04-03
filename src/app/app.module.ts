import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoListAllComponent } from './todo/todo-list-all/todo-list-all.component';
import { TodoListUserComponent } from './todo/todo-list-user/todo-list-user.component';
import { LoginComponent } from './user/login/login.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    TodoDetailComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoListAllComponent,
    TodoListUserComponent,
    LoginComponent,
    SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
