import { Component, OnInit } from '@angular/core';
import { Customer,DataSourceService } from './dataSource.service';

@Component({
  selector: 'app-dev-table',
  templateUrl: './dev-table.component.html',
  styleUrls: ['./dev-table.component.css'],
  providers: [DataSourceService]
})
export class DevTableComponent implements OnInit {
  customers: Customer[];
  constructor(private dsService:DataSourceService ) { 
    this.customers =  dsService.getCustomers();
  }

  ngOnInit() {
  }

}
