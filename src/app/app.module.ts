import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PswrdcompComponent } from './components/pswrdcomp/pswrdcomp.component';
import { IputscompComponent } from './components/iputscomp/iputscomp.component';
import { ServicegeneratorService } from './service/servicegenerator.service';

@NgModule({
  declarations: [
    AppComponent,
    PswrdcompComponent,
    IputscompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServicegeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
