import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface NHData {
  univeristy: {
    colleges: string[],
    branches: string[],
    semesters: string[],
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

  // show/hide data
  showdata = false;
  showdata2 = false;
  dataStatus = 'Show Data';
  dataStatus2 = 'Show Data';

  // filling form selects
  universities: ['GGSIPU', 'RTU'];
  colleges: string[];
  branches: string[];
  semesters: string[];

  populateData() {
    this.colleges = this.newData.univeristy.colleges;
    this.branches = this.newData.univeristy.branches;
    this.semesters = this.newData.univeristy.semesters;
  }

  // ----------- Class Methods -----------

  getData2() {
    // get an observable of NHData
    return this.http.get<NHData>(this.nhDataUrl);
  }

  fetchData() {
    this.getData2().subscribe((data: NHData) => this.newData = { ...data });
  }

  // show/hide of nh data in a cleaner format
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
