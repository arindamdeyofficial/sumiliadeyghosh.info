import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  shoppingPicPath = "assets/img/shopping.png";
  travellingPicPath = "assets/img/travelling.png";
  readingPath = "assets/img/study.png";
  musicPicPath = "assets/img/music.png";
  kidsPicPath = "assets/img/kids.png";
  paintingPicPath = "assets/img/painting.png";
  socialPicPath = "assets/img/social.png";
}
