import { Component, OnInit } from '@angular/core';
import { Breeds } from '../../api/models/breeds.model';
import { Favourite } from '../../api/models/favourite.model';
import { ApiService } from '../../api/api-services/api.service';
import { PersistanceService } from '../../services/persister.service';
import { LoggedData } from './voting.interface';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  public loadedData: Breeds[] = [];

  public imageID: string = '';

  public subID: string = '';
  
  public favouriteID: string = '';

  public logs: LoggedData[] = [];

  public isFavourite!: boolean;
  public isBtnReady: boolean = true;

  
  constructor(private service: ApiService, private persister: PersistanceService) {
    this.createSubID();
    this.searchImage();
  };

  ngOnInit(): void { }
  
  public createSubID(): void {
    this.persister.set('sub_id', 'id369432');
    this.subID = this.persister.get('sub_id');
  };

  public searchImage(): void {
    this.service.searchVotingImage().pipe(
      switchMap(catData => {
        this.loadedData = catData;
        this.imageID = this.loadedData[0].id;
        return this.getFavouriteData()
      }
      )).subscribe(favouritesData => {
        this.checkIfFavourite(favouritesData);
      });
  };

  public getFavouriteData(): Observable<any> {
    return this.service.getFavourites(this.subID)
  }

  public checkIfFavourite(favouritesData: Favourite[]): void {
    let favouritesImgID = favouritesData.map((el: Favourite) => el.image_id);
    this.isFavourite = favouritesImgID.includes(this.imageID);
  }

  public deleteFavourite(): Observable<any> {
    return this.service.delFavourite(this.favouriteID);
  }

  public postFavourite(): Observable<any> {
    return this.service.postFavourite(this.imageID, this.subID);
  }
  
  public onFavBtnClicked(): void {
    this.isBtnReady = false;
    let requestType!: string;
    this.getFavouriteData().pipe(
      switchMap(favouritesData => {
        this.checkIfFavourite(favouritesData);
        if (this.isFavourite) {
          requestType = 'DELETE';
          return this.deleteFavourite();
        }
        else {
          requestType = 'POST';
          return this.postFavourite();
        };
      }
      )).subscribe((response) => {
        if (response['message'] == 'SUCCESS') {
          if (requestType === 'DELETE') {
            this.isFavourite = false;
            this.loggedAction('removed from', 'Favourites');
          }
          else {
            this.isFavourite = true;
            this.favouriteID = response["id"];
            this.loggedAction('added to', 'Favourites');
          }
          this.isBtnReady = true;
        }
        
      },
        (error: any) => {
          console.error(error);
          this.isBtnReady = true;
        }
      );
   };
  

  public onVoteBtnClicked(value: number) {
    this.service.postVote(this.imageID, this.subID, value).subscribe((res) => {
      if (res['message'] === 'SUCCESS') {
        if (value === 1) {
          this.loggedAction('added to', 'Likes');
        }
        else {
          this.loggedAction('added to', 'Dislikes');
        }
        this.loadedData = []
        this.searchImage()
      }
    });
  };

  public loggedAction(action: string, page: string): void {    
    let log: LoggedData = {
      imageID: '',
      action: '',
      place: '',
      currentTime: '',
    };

    let time = new Date();
    let current_time = `${time.getHours()} : ${(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}`;
    
    log['imageID'] = this.imageID;
    log['action'] = action;
    log['place'] = page;
    log['currentTime'] = current_time;
    console.log(`New Action: ${action} ${page}`);

    this.logs.push(log);
  };
}
