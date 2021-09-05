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


  ELEMENT_DATA : Users[];
  displayedColumns: string[] = ['id', 'name', 'email', 'status'];
  dataSource = new MatTableDataSource<Users>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private hero:HeroService) { }

  ngOnInit() {
    this.getAllReports("https://gorest.co.in/public/v1/users");
  }

  public getAllReports(url: string){
    let resp = this.hero.getUsers(url);
    resp.subscribe(report=>{
      this.dataSource.data=report.data;
      //this.dataSource.paginator = report.meta.pagination;
    });
  }
}
