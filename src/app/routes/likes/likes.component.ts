import { Component, OnInit } from '@angular/core';
import { Vote } from '../../api/models/vote.model';
import { ApiService } from '../../api/api-services/api.service';
import { PersistanceService } from '../../services/persister.service';
import { LoggedData } from '../voting/voting.interface';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css', '../../components/shared/grid-container/grid-container.component.css']
})
export class LikesComponent implements OnInit {

  public subID: string = '';

  public loadedData: Vote[] = [];

  public imageID: string = '';

  public logs: LoggedData[] = [];

  constructor(private service: ApiService, private persister: PersistanceService) {
    this.subID = this.persister.get('sub_id');
    this.getLikedImgs();
  }

  ngOnInit(): void {
  }

  public getLikedImgs(): void {
    this.service.getVotes(this.subID).subscribe((res) => {
      this.loadedData = res.filter((el: Vote) => el.value === 1);
    });
  };

  public removeFromLikes(imageData: Vote): void {
    this.imageID = imageData.image_id
    let vote_id = imageData.id;
    this.service.delVote(vote_id).subscribe((res) => {
      if (res['message'] == 'SUCCESS') {
        this.loggedAction('removed from', 'Likes');
        this.getLikedImgs();
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


    // toDo move get_grid_class to grid-container component and then import where it needed to
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
