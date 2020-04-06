import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
import { TodoAssignComponent } from './todo/todo-assign/todo-assign.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserEditComponent,
    LoginComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoDetailComponent,
    TodoAssignComponent,
    MenuComponent,
    HomeComponent,
    SortPipe,
    TodoListAllComponent,
    TodoListUserComponent,
    UserDetailComponent
  ],
imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
