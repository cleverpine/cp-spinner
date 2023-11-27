import { Component } from '@angular/core';

import { LoadingService } from 'cp-lht-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.show();
  }
}
