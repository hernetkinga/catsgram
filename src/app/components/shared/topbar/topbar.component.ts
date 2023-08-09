import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() public searchWord: string = "";

  constructor(private router: Router) { 
    console.log(this.router);
  }

  ngOnInit(): void {
  }

  public submit(): void {

    if (this.searchWord) {
      this.router.navigateByUrl(`search/${this.searchWord}`);
    }
    else {
      this.router.navigateByUrl('search/')
    }
  }

}
