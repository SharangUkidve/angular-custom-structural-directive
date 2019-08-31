import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemDirective } from './list/list-item.directive';
import { MockDataService } from './mock-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, ListComponent, ListItemDirective ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
