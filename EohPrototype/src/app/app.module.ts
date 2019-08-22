import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { BingMapComponent } from './bing-map/bing-map.component';
import { SideModuleNavComponent } from './side-module-nav/side-module-nav.component';
import { DevExtremeModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component'; 
import { NgxWidgetGridModule } from 'ngx-widget-grid';
import { DevTableComponent } from './dev-table/dev-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    BingMapComponent,
    SideModuleNavComponent,
    DashboardGridComponent,
    DevTableComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    NgxWidgetGridModule,
    MatToolbarModule,
     AgmCoreModule.forRoot({
      apiKey:"",
      libraries: ['drawing']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);