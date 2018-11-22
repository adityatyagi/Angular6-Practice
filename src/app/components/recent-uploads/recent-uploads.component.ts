import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface RecentlyUploaded {
  id: number;
  topic: string;
  subject: string;
  uploaded_on: string;
  downloads: string;
  rating: string;
}

/* Constants used to fill up our data base. */
const ELEMENT_DATA: RecentlyUploaded[] = [
  {id: 1, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
  {id: 2, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
  {id: 3, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
  {id: 4, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
  {id: 5, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
  {id: 6, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
  {id: 7, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
  {id: 8, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
  {id: 9, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
  {id: 10, topic: 'Hydrogen', subject: 'Sample subject 1', uploaded_on: '1 November, 2018', downloads: '44', rating: '4'},
];

@Component({
  selector: 'app-recent-uploads',
  templateUrl: './recent-uploads.component.html',
  styleUrls: ['./recent-uploads.component.css']
})
export class RecentUploadsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'topic', 'subject', 'uploaded_on', 'downloads', 'rating'];
  dataSource: MatTableDataSource<RecentlyUploaded>;
  users: RecentlyUploaded[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.users = ELEMENT_DATA;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
