import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-breed',
  templateUrl: './cat-breed.component.html',
  styleUrls: ['./cat-breed.component.css']
})
export class CatBreedComponent implements OnInit {

  @Input() url!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
