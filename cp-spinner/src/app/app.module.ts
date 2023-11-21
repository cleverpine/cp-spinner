import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LhtSpinnerComponent } from 'projects/cp-lht-spinner/src/lib/lht-spinner.component';

@NgModule({
  declarations: [AppComponent, LhtSpinnerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
