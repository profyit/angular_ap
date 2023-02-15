import { DataEnums } from './../Models/Enums';
import { catchError, map, Observable,shareReplay } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  private apiURL = environment.baseUrl + "/api/Test";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
   data :DataEnums = new DataEnums();
  constructor(private httpClient: HttpClient) { 

  }




   public getAllEnums(): Observable<DataEnums> {
    return this.httpClient
    .get(
      this.apiURL + "/Test"  
    ).pipe(map( (DataEnums: any) => this.data=DataEnums))
    .pipe(
      shareReplay(10)
    ); 
  }
  

 
}

