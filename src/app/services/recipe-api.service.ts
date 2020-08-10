import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  url: string;
  app_key: string = "Insert Valid App_Key";
  app_id: string = "Insert Valid App_Id";

  results: any[] = [];



  constructor(private http: HttpClient, public router: Router) { }

  getRecipeData(userSearch: string, dietSearch: string): Observable<any> {    
    this.url = "https://api.edamam.com/search?q=" + userSearch + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&to=100";
    if (dietSearch.length == 0) {
      this.url;
    } else {
      this.url = this.url + "&healt=" + dietSearch;
    }
    return this.http.get<any>(this.url)
      .pipe(
        catchError((err) => {
          console.log('Connection Error: 401');
          console.log('Error caught in service');
          console.error(err);
          this.router.navigateByUrl("/error-page");

          return throwError(err);    //Rethrow it back to component
        })
      )
  }

}
