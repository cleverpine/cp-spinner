import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LhtSpinnerModule } from 'cp-lht-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LhtSpinnerModule.forRoot({
      spinnerShowDelayTime: 300,
      spinnerSize: 100,
      spinnerLoadingText: 'Custom text',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
