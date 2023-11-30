import { Component } from '@angular/core';

import { LhtLoadingService } from 'cp-lht-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private loadingService: LhtLoadingService) {}

  ngOnInit() {
    this.loadingService.show();
  }
}
