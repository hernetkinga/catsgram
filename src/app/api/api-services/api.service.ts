import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from '../../../environments/environment';
import { Breed } from '../models/breed.model';
import { Breeds } from '../models/breeds.model';
import { Category } from '../models/category.model';
import { Favourite } from '../models/favourite.model'
import { Vote } from '../models/vote.model'
import { ImageAnalysis } from '../models/image-analysis.model';
import { UploadedImage } from '../models/uploaded-image.model';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public searchBreedByName(searchWord: string): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${environment.apiURL}/breeds/search/?q=${searchWord}`);
  }

  public searchAllPublic(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?has_breeds=1&limit=20&format=json`);
  } 

  public searchByBreed(breedId: string): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?has_breeds=1&limit=20&breed_id=${breedId}`);
  }

  public getImageById(image_id: string): Observable<Breeds> {
    return this.http.get<Breeds>(`${environment.apiURL}/images/${image_id}?format=json`);
  }

  public searchCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiURL}/breeds`); 
  }

  public searchVotingImage(): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?limit=1&has_breeds=1&format=json`);
  }

  public getFavourites(sub_id: string): Observable<Favourite[]> {
    return this.http.get<Favourite[]>(`${environment.apiURL}/favourites?limit=100&sub_id=${sub_id}`);
  }

  public postFavourite(image_id: string, sub_id: string): Observable<any> {
    return this.http.post(`${environment.apiURL}/favourites`, {'image_id': image_id, 'sub_id': sub_id});
  }

  public delFavourite(favourite_id: string): Observable<any> {
    return this.http.delete(`${environment.apiURL}/favourites/${favourite_id}`);
  }

  public getVotes(sub_id: string): Observable<Vote[]> {
    return this.http.get<Vote[]>(`${environment.apiURL}/votes?limit=20&sub_id=${sub_id}`);
  }

  public postVote(image_id: string, sub_id: string, value: number): Observable<any> {
    return this.http.post(`${environment.apiURL}/votes`, {'image_id': image_id, 'sub_id': sub_id, 'value': value});
  }

  public delVote(vote_id: string): Observable<any> {
    return this.http.delete(`${environment.apiURL}/votes/${vote_id}`);
  }
  
  public searchByImgType(mime_types: string = 'jpg,png,gif', sub_id: string): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?mime_types=${mime_types}&limit=20&include_favourite=1&sub_id=${sub_id}&format=json`);
  }

  public searchByBreedAndByImgType(breedId: string, mime_types: string = 'jpg,png,gif', sub_id: string): Observable<Breeds[]> {
    return this.http.get<Breeds[]>(`${environment.apiURL}/images/search?limit=20&mime_types=${mime_types}&breed_id=${breedId}&include_favourite=1&sub_id=${sub_id}`);
  }

  public uploadImage(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiURL}/images/upload`, formData);
  }

  public analyseImage(image_id: string) {
    return this.http.get<ImageAnalysis[]>(`${environment.apiURL}/images/${image_id}/analysis`);
  }
}
