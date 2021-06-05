import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nttSymbolPath = "assets/img/ntt.png";
  universitySymbolPath = "assets/img/rabindrabharati.png";
  universityPicPath = "assets/img/university.png";
  CollegeSymbolPath = "assets/img/calcuttauniversity.png";
  CollegePicPath = "assets/img/college.png";
  SchoolPicPath = "assets/img/school.png";
}
