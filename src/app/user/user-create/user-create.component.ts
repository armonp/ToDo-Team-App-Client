import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  save():void{
    if(this.user.firstName == ''){
      this.user.firstName = "noname";
    }
    if(this.user.lastName == ''){
      this.user.lastName = "noname";
    }
  
    this.usersvc.create(this.user).subscribe(
    res=>{
      console.debug("User created", res);
      this.router.navigateByUrl("users/list");
    },
    err=>{console.error("Error creating User", err)}
    );
  }
  constructor(private usersvc: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

}
