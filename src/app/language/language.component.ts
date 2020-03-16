import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  langPicPath = "assets/img/lang.png";
  engPicPath = "assets/img/eng.png";
  bengPicPath = "assets/img/beng.png";
  hindiPicPath = "assets/img/hindi.png";
}
