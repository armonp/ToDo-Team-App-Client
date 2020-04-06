import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = new User();
  delete():void{
    this.usersvc.remove(this.user).subscribe(
      res => {
        this.user = res;
        console.debug("User deleted.", res);
        this.router.navigateByUrl("/users/user");
      },
      err => {console.error("Cannot delete user.", err);}
    );
  }
  constructor(
    private route: ActivatedRoute,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res =>{
        this.user = res;
        console.debug("User:", res);
      },
      err => {console.error("Error on User-Detail Get", err);}
    );
  }
}