import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LhtSpinnerModule } from 'cp-lht-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LhtSpinnerModule.forRoot({
      spinnerDelayTime: 300,
      spinnerSize: 100,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
