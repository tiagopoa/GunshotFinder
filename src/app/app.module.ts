import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';

@NgModule({  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAifS9CFk1pbp5YIbv2NAQexZC9K55yarU'
    })
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
