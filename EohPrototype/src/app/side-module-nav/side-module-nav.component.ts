import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from '../shared/menuItem.module';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { MenuItemService } from '../shared/menuItem.service';
import { DxSelectBoxModule,
  DxTreeViewModule,
  DxTemplateModule } from 'devextreme-angular';

@Component({
  selector: 'app-side-module-nav',
  templateUrl: './side-module-nav.component.html',
  styleUrls: ['./side-module-nav.component.css'],
  providers:[MenuItemService]
})

export class SideModuleNavComponent implements OnInit {
  @Output() menuIsSelected = new EventEmitter<MenuItem>();
  menuItems: MenuItem[];
  currentItem : MenuItem;
  

  constructor(private menuService:MenuItemService) { 
    this.menuItems = menuService.getMenu();
    this.currentItem = this.menuItems[0];
    this.menuIsSelected.emit(this.currentItem);
  }

  selectItem(e) {
    this.currentItem = e.itemData;
    this.menuIsSelected.emit(this.currentItem);
}

  ngOnInit() {
    
 }

  };



