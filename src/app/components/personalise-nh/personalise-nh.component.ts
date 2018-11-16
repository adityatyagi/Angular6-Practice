import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { delay, share } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

export interface Universities {
    _id: string;
    name: string;
    courses: string[];
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
  courseNames: any = [];
  cNames: any = [];
  bNames: any = [];
  sNames: any = [];
  subNames: any = [];


  // initialise the form
  personalForm = this.fb.group({
    universityName: [''],
    courseName: [''],
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

  get courseName() {
    return this.personalForm.get('courseName').value;
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

  // fetch + populate data in personalForm
  fetchData() {
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
    this.courseNames = this.universityData['universities'][0].courses;

    // fetch branch name
    const subjectKey =  Object.keys(this.universityData['universities'][0].subjects[0])[0];
    if (subjectKey === 'IT') {
      this.subNames = this.universityData['universities'][0].subjects[0][subjectKey];
    }
  }

  // submit personal form
  onSubmitPersonalForm() {
    alert('Dashboard settings saved.');

    // object to send to save/update api
    const profileFormDetails = {
      'university': this.universityName,
      'course': this.courseName,
      'college': this.collegeName,
      'branch': this.branchName,
      'semester': this.semesterName,
      'subjects': this.mySubjects
    };
    console.log(profileFormDetails);
  }

  // remove from my subjects
  removeSubject(subject) {
    const deleteAtIndex = this.mySubjects.indexOf(subject);
    if (deleteAtIndex >= 0) {
      const removeResponse = confirm('Do you want to remove ' + subject + ' from your dashboard?');
      if (removeResponse) {
        this.mySubjects.splice(deleteAtIndex, 1);
        alert('Subject: ' + subject + ' removed.');
      } else {
        return false;
      }
    } else {
      alert('Please select a subject to delete.');
    }
  }

  // add subject to my subjects
  addSubject() {
    if (this.mySubjects.indexOf(this.subjectName) >= 0) {
      alert(this.subjectName + ' is already present.');
    } else {
      this.mySubjects.unshift(this.subjectName);
      alert(this.subjectName + ' added!');
    }
  }
  // ------------------------------ Constructor AND ngOnInit ----------------------------------
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.fetchData();
    // test
    this.user = this.getAsyncData().pipe(share());
  }

}
