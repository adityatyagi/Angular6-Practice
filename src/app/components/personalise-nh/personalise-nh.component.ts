import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface NHData {
  univeristy: {
    colleges: string[],
    branches: string[],
    subjects: [
      {
        branch: string[]
      }
    ]
  };
}

@Component({
  selector: 'app-personalise-nh',
  templateUrl: './personalise-nh.component.html',
  styleUrls: ['./personalise-nh.component.css']
})
export class PersonaliseNhComponent implements OnInit {

  // ----------- Class Properties -----------

  nhDataUrl = 'http://localhost:4200/assets/data.json';
  newData: NHData;

  showdata = false;
  showdata2 = false;
  dataStatus = 'Show Data';
  dataStatus2 = 'Show Data';
  // ----------- Class Methods -----------

  getData2() {
    // get an observable of NHData
    return this.http.get<NHData>(this.nhDataUrl);
  }

  fetchData() {
    this.getData2().subscribe((data: NHData) => this.newData = { ...data });
  }

  showData2() {
    console.log(this.newData);
    this.showdata2 = !this.showdata2;
    if (this.showdata2) {
      this.dataStatus2 = 'Hide Data';
    } else {
      this.dataStatus2 = 'Show Data';
    }
  }
  // ----------- Constructor AND ngOnInit -----------
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // fetch nh data
    this.fetchData();
  }

}
