import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../api/api-services/api.service';
import { ShareRouteDataService } from '../../services/share-route-data.service';
import { Breeds } from '../../api/models/breeds.model';
import { Category } from '../../api/models/category.model';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css', '../../components/shared/grid-container/grid-container.component.css']
})
export class BreedsComponent implements OnInit {

  public loadedData: Breeds[] = [];

  public showedData: Breeds[] = [];

  public categories: Category[] = [];

  public currentCategory: string = 'All breeds'

  public currentBreedID!: string;

  public imgsLimit: number = 20;

  public isLimitDropdownOpen: boolean = false;
  public isCategoriesDropdownOpen: boolean = false;

  constructor(private service: ApiService, private shareDataService: ShareRouteDataService) {
    this.searchData();
    this.searchCategories();
  }

  ngOnInit(): void { }
  
  @ViewChild('dropdown_breeds') dropdown_breeds!: ElementRef;

  public searchData(): void {
    if (this.loadedData) {
      this.loadedData = [];
    }
    if (this.currentCategory == 'All breeds') {
      this.service.searchAllPublic().subscribe((catsData) => {
        this.loadedData = catsData.filter((catData: Breeds) => typeof(catData) !== 'undefined');
        this.showData();
      });
    }
    else {
      this.service.searchByBreed(this.currentBreedID).subscribe((breedData) => {
        if (typeof (breedData) !== 'undefined') {
          this.loadedData = breedData;
          this.showData();
        }
      });
    }
  }

  public showData(): void {
    this.showedData = this.loadedData.slice(0, this.imgsLimit);
  }

  public searchCategories(): void {
    this.service.searchCategories().subscribe((categoriesData) => {
      if (typeof (categoriesData) !== 'undefined') {
        this.categories = categoriesData;
      }
      else {
        console.error('Categories data is Empty');
      }
    });
  }

  public chooseCategory(category: Category | string): void {
    if (typeof category === 'string') {
      this.currentCategory = 'All breeds';
    }
    else {
      this.currentCategory = category.name;
      this.currentBreedID = category.id;
    }
    this.openCloseDropbars('categoriesDropbar')
    this.searchData();
  }

  public shareData(catData: Breeds) {
    this.shareDataService.data.push(catData);
  }

  public openCloseDropbars(dropbar: string): void {
    if (dropbar == 'categoriesDropbar') {
      this.isCategoriesDropdownOpen = !this.isCategoriesDropdownOpen;
    }
  }

  public clickedOutsideDropbars(dropbar: string): void {
    if (dropbar == 'categoriesDropbar') {
      this.isCategoriesDropdownOpen = false;
    }
  }

  public sort(order: string): void {
    if (order == 'descending') {
      this.showedData = this.loadedData
      .slice(0, this.imgsLimit)
      .sort((a, b) => (a.breeds[0].name > b.breeds[0].name ? -1 : 1));
    }
    if (order == 'ascending') {
      this.showedData = this.loadedData
      .slice(0, this.imgsLimit)
      .sort((a, b) => (a.breeds[0].name < b.breeds[0].name ? -1 : 1));
    }
  }

    public get_grid_class(index: number): string {
      const pattern = [
        'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'elv', 'twf', 'thrt', 'frt', 'fvt',
        'sxt', 'svt', 'eigt', 'nt', 'twt'
      ];
      let clamped_index = index % pattern.length;
      return pattern[clamped_index];
    }

}
