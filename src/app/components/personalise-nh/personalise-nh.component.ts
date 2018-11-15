import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Universities {
    _id: string;
    name: string;
    colleges: string[];
    branches: string[];
    semesters: string[];
    subjects: [
      {
        branch: string[]
      }
    ];
}

@Component({
  selector: 'app-personalise-nh',
  templateUrl: './personalise-nh.component.html',
  styleUrls: ['./personalise-nh.component.css']
})
export class PersonaliseNhComponent implements OnInit {

  // ----------- Class Properties -----------

  nhDataUrl = 'http://localhost:4200/assets/data.json';
  universityData: Universities[] = [];

  // filling form selects
  uNames: any = [];
  cNames: any = [];
  bNames: any = [];
  sNames: any = [];
  subNames: any = [];


  // initialise the form
  personalForm = this.fb.group({
    universityName: [''],
    collegeName: [''],
    branchName: [''],
    semesterName: [''],
    subjectName: ['']
  });

  // getters for the values of form fields
  get universityName() {
    return this.personalForm.get('universityName').value;
  }

  get collegeName() {
    return this.personalForm.get('collegeName').value;
  }

  get branchName() {
    return this.personalForm.get('branchName').value;
  }

  get semesterName() {
    return this.personalForm.get('semesterName').value;
  }

  get subjectName() {
    return this.personalForm.get('subjectName').value;
  }

  // ------------------------------------------ Class Methods -----------------------------------------------
  getData2() {
    // get an observable of NHData
    return this.http.get<Universities[]>(this.nhDataUrl);
  }

  fetchData() {
    this.getData2().subscribe((data: Universities[]) => {
      this.universityData = data;
      console.log(this.universityData['universities']);
    });
  }

  // populating data from the server data
  populateData() {
    alert('Populating Data...');
    // fetch the university names from the array and push it into univeristies
    for (let i = 0; i < this.universityData['universities'].length; i++) {
      this.uNames.push(this.universityData['universities'][i].name);
    }

    this.bNames = this.universityData['universities'][0].branches;
    this.cNames = this.universityData['universities'][0].colleges;
    this.sNames = this.universityData['universities'][0].semesters;

    // fetch branch name
    const subjectKey =  Object.keys(this.universityData['universities'][0].subjects[0])[0];
    if (subjectKey === 'IT') {
      alert('Fetch IT Subjects');
      this.subNames = this.universityData['universities'][0].subjects[0][subjectKey];
    }
  }

  // submit personal form
  onSubmitPersonalForm() {
    alert('Changes accepted.');
    console.log('Form Values: ', this.personalForm.value);
  }
  // ----------- Constructor AND ngOnInit -----------
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    // fetch nh data
    this.fetchData();
  }

}
