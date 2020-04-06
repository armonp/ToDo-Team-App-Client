import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  message:string = "";

  login(username:string, password:string) : any{
    this.usersvc.enter(username, password).subscribe(
      res => {
        this.user = res;
        this.systemsvc.user = this.user;
        console.debug("Login complete.", res);
        this.router.navigateByUrl("/users/user");
      },
      err => {console.error("Error during login:",err);
      this.message = "USER NOT FOUND";
      this.systemsvc.user = null;
      return this.message;
    } 
    );
  }

  constructor(
    private usersvc: UserService,
    private systemsvc: SystemService,
    private router: Router,
  ) { }
  ngOnInit(): void {
  }

}
