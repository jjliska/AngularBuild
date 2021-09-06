//todo.component.ts and user.component.ts are redundant and could be merged into a single component
//Css and html are fairly similar but different enough to justify being seperate components
import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDoComponent implements OnInit {
  // URL and API constructors
  length: number;
  prevLink: string;
  nextLink: string;
  totPages: number;
  url = "https://gorest.co.in/public/v1/todos";
  constructor(private hero:HeroService){}

  //Table constructors
  ELEMENT_DATA : any;
  displayedColumns: string[] = ['user_id', 'title', 'due_on', 'status'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getAllReports(this.url+"?page=1");
  }

  // First Previous Next Last button event handler
  public pageChange(event?: any){
    if(event.previousPageIndex == (event.pageIndex+1)) this.getAllReports(this.prevLink);
    else if(event.previousPageIndex == (event.pageIndex-1)) this.getAllReports(this.nextLink);
    else if(event.pageIndex+1 == this.totPages) this.getAllReports(this.url+"?page="+this.totPages.toString());
    else if(event.pageIndex == 0)this.getAllReports(this.url+"?page=1");
  }

  // Gets and sets table data from the API
  public getAllReports(url: string){
    let resp: any = this.hero.getAPI(url);
    resp.subscribe(report=>{
        this.dataSource = report.data;
        this.length = report.meta.pagination.total;
        this.totPages = report.meta.pagination.pages;
        this.prevLink = report.meta.pagination.links.previous;
        this.nextLink = report.meta.pagination.links.next;
    });
  }
}
