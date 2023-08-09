import { Component, OnInit } from '@angular/core';
import { Breed } from '../../api/models/breed.model';
import { Breeds } from '../../api/models/breeds.model';
import { ApiService } from '../../api/api-services/api.service';
import { ShareRouteDataService } from '../../services/share-route-data.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
  
export class InfoComponent implements OnInit {
  
  public breedImgsURLs: {
    "path": string
  }[] = [];

  public breedInfo!: Breed;

  public breedID: string = '';

  public firstImageID: string = '';
  

  constructor(private service: ApiService, private shareDataService: ShareRouteDataService) { }

  ngOnInit(): void {
    if (this.shareDataService.data.length === 1) {

      this.breedID = this.shareDataService.data[0]['breeds'][0].id;

      this.firstImageID = this.shareDataService.data[0].id;

      this.breedImgsURLs.push({ 'path': this.shareDataService.data[0].url });
      this.searchBreedImgs(this.breedID);
      
      this.breedInfo = this.shareDataService.data[0]['breeds'][0];

      this.shareDataService.data = [];
    };
  }
  
  public searchBreedImgs(breed_id: string): void {
    this.service.searchByBreed(breed_id).subscribe((res) => {
      let breeds = res.filter((el: Breeds) => el.id !== this.firstImageID);
      for (let i of Array(4).keys()) {
        if (breeds[i]) {
          this.breedImgsURLs.push({ 'path': breeds[i].url });
        };
      };
    });
    
  }


}
