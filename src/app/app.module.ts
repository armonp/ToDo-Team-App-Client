import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { LoginComponent } from './user/login/login.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoAssignComponent } from './todo/todo-assign/todo-assign.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
