import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { LoginComponent } from './user/login/login.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoAssignComponent } from './todo/todo-assign/todo-assign.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserEditComponent,
    LoginComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoDetailComponent,
    TodoAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
