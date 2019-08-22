import { Component, OnInit } from '@angular/core';
import DxThemes from 'devextreme/ui/themes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navBarData:[]
  constructor() { }
  
  

  ngOnInit() {
  }
  //  switchTheme = function(themeName) {
  //   window.localStorage.setItem("dx-theme", themeName);
  //   window.location.reload();

  onClick(e: any) {    
    DxThemes.current(DxThemes.current() === 'generic.contrast' ? 'generic.dark' : 'generic.contrast');    
  }
}


  
