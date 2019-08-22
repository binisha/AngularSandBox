import { Component, OnInit } from '@angular/core';
import { DashboardItemService } from './dashboardItem.service';
@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.css'],
  providers:[DashboardItemService]
})
export class DashboardGridComponent implements OnInit {

  rows = 4;
	columns = 6;

	locked = false;

	widgets = [];

	add() {
		this.widgets.push({
			position: { top: 2, left: 1, height: 1, width: 1 }
		});
	}
  // widgets= [];
  constructor(private dashboardItemService:DashboardItemService) {
    // this.widgets = dashboardItemService.getDashboardItems();
   }

  ngOnInit() {
  

  }

}
