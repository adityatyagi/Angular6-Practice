import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { delay, share } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

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

  // test
  user: Observable<{}>;
  loadings = true;

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

  // my subjects
  mySubjects: string[] = ['Operating System', 'Production Technology'];
  // ------------------------------------------ Class Methods -----------------------------------------------

  getAsyncData() {
    // Fake Slow Async Data
   return of({
     firstName: 'Luke',
     lastName: 'Skywalker',
     age: 65,
     height: 172,
     mass: 77,
     homeworld: 'Tatooine'
   }).pipe(
     delay(3000)
   );
 }
  getData2() {
    // get an observable of NHData
    return this.http.get<Universities[]>(this.nhDataUrl);
  }

  fetchData() {
    console.log('Loading Status: ' + this.loadings );
    this.getData2().subscribe((data: Universities[]) => {
      this.universityData = data;
      this.populateData();
      this.loadings = false;
    });
  }

  // populating data from the server data
  populateData() {
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
      this.subNames = this.universityData['universities'][0].subjects[0][subjectKey];
    }
  }

  // submit personal form
  onSubmitPersonalForm() {
    alert('Changes accepted.');
    console.log('Form Values: ', this.personalForm.value);
  }

  // add subject
  addSubject() {
    alert('Subject Added.');
  }
  
  // ------------------------------ Constructor AND ngOnInit ----------------------------------
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.fetchData();
    // test
    this.user = this.getAsyncData().pipe(share());
  }

}
