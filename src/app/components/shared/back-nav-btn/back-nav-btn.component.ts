import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-nav-btn',
  templateUrl: './back-nav-btn.component.html',
  styleUrls: ['./back-nav-btn.component.css']
})
export class BackNavBtnComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
