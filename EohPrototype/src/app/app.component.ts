import { Component, Input } from '@angular/core';
import { MenuItem } from './shared/menuItem.module';
import DxThemes from 'devextreme/ui/themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() currentlyselectedMenu: MenuItem;
  title = 'EohPrototype';
  selectedMenu: MenuItem;
  

  constructor() {
     DxThemes.current('generic.dark');
    //  DxThemes.current(window.localStorage.getItem("dx-theme") || "generic.dark");
    
  }

 
}
