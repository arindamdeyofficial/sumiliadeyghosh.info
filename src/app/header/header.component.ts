import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  webSymbolPath = "assets/img/web.png";
  mailSymbolPath = "assets/img/mail.png";
  phoneSymbolPath = "assets/img/phone.png";
  profilePicPath = "assets/img/me.jpeg";
  linkedinPath = "assets/img/linkedin.png";
}
