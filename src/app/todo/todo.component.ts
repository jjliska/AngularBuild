import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { ToDos } from 'src/todos';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDoComponent implements OnInit {
  ELEMENT_DATA : ToDos[];
  displayedColumns: string[] = ['user_id', 'title', 'due_on', 'status'];
  dataSource = new MatTableDataSource<ToDos>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private hero:HeroService) { }

  ngOnInit() {
    this.getAllReports("https://gorest.co.in/public/v1/todos");
  }

  public getAllReports(url: string){
    let resp = this.hero.getTodos(url);
    resp.subscribe(report=>{
      this.dataSource.data=report.data;
      //this.dataSource.paginator = report.meta.pagination;
    });
  }
}
