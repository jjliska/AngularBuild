import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { Users } from 'src/users';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // URL and API constructors
  length: number;
  prevLink: string;
  nextLink: string;
  totPages: number;
  url = "https://gorest.co.in/public/v1/users";
  constructor(private hero:HeroService){}

  //Table constructors
  ELEMENT_DATA : Users[];
  displayedColumns: string[] = ['id', 'name', 'email', 'status'];
  dataSource = new MatTableDataSource<Users>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getAllReports(this.url+"?page=1");
  }

  // First Previous Next Last button event handler
  public pageChange(event?: PageEvent){
    if(event.previousPageIndex == (event.pageIndex+1)) this.getAllReports(this.prevLink);
    else if(event.previousPageIndex == (event.pageIndex-1)) this.getAllReports(this.nextLink);
    else if(event.pageIndex+1 == this.totPages) this.getAllReports(this.url+"?page="+this.totPages.toString());
    else if(event.pageIndex == 0)this.getAllReports(this.url+"?page=1");
  }

  // Gets and sets table data from the API
  public getAllReports(url: string){
    let resp = this.hero.getUsers(url);
    resp.subscribe(report=>{
      try{
        this.dataSource = report.data;
        this.length = report.meta.pagination.total;
        this.totPages = report.meta.pagination.pages;
        this.prevLink = report.meta.pagination.links.previous;
        this.nextLink = report.meta.pagination.links.next;
      }
      catch(er){
        console.log(er);
      }
    });
  }
}
