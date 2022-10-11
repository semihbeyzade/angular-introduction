import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  username: string ='';
  users: any;  
  today = Date.now();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.username = this.userService.username;
    this.hello();
  }

  hello() {
    this.userService.getUsers()
    .subscribe(res => {
      console.log(res);
      this.users = res;
      
    })
  }

}
