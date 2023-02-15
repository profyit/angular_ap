import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin ,Observable,of,shareReplay} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private apiURL = environment.baseUrl
  errorMessage: any;
  constructor(private http: HttpClient) { }

  
getFromBackEndApi(emailName:string) {

  let url = this.apiURL +'/GetEmailData';
  
  //const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');;
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  const body = //{ 'emailText' : emailName };
  {
    "emailText": JSON.stringify(emailName)
    };
  // const body = [{
  //   emailText: emailName
   
//}];
  return this.http.post<any>(url, JSON.stringify(body),httpOptions)//,{headers:headers})
  .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      this.errorMessage = error.message;
      console.error('There was an error!', error);

      // after handling error, return a new observable 
      // that doesn't emit any values and completes
      return of();
  }))
  
 
   
}

}
