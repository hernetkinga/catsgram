import { Component, OnInit } from '@angular/core';
import { Favourite } from '../../api/models/favourite.model';
import { ApiService } from '../../api/api-services/api.service';
import { PersistanceService } from '../../services/persister.service';
import { LoggedData } from '../voting/voting.interface';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css', '../../components/shared/grid-container/grid-container.component.css']
})
export class FavouritesComponent implements OnInit {

  public subID: string = '';

  public loadedData: Favourite[] = [];

  public imageID: string = '';

  public logs: LoggedData[] = [];

  constructor(private service: ApiService, private persister: PersistanceService) {
    this.subID = this.persister.get('sub_id');
    this.getFavImgs();
  }

  ngOnInit(): void {}

  public getFavImgs(): void {
    this.service.getFavourites(this.subID).subscribe((favImgs) => {
      this.loadedData = favImgs;
    });
  };

  public unfavouriteImage(imageData: Favourite): void {
    this.imageID = imageData.image_id;
    let favourite_id = imageData.id;
    this.service.delFavourite(favourite_id).subscribe((res) => {
      if (res['message'] == 'SUCCESS') {
        this.loggedAction('removed from', 'Favourites');
        this.getFavImgs();
      }
    });
  }

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

    this.logs.push(log);

  };

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
