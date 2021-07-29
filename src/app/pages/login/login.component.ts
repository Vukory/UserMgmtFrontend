import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  name = "Vuko";
  ngOnInit(): void {
  }
  onClick(): void { console.log("sign in works") }

}
