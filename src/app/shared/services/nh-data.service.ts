import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UniversitySpecificData } from 'src/app/components/personalise-nh/UniversitySpecificData';

@Injectable({
  providedIn: 'root'
})
export class NhDataService {
  // -------------------- Class Properties ---------------
  baseUrlData = 'http://localhost:4200/assets/';
  // -------------------- Class Methods ------------------
    // get specific data
    getSpecificData() {
      // return observable of type - UniversitySpecificData
      return this.http.get<UniversitySpecificData[]>(this.baseUrlData + 'specificData.json');
    }
  // -------------------- Constructor --------------------
  constructor(private http: HttpClient) { }
}
