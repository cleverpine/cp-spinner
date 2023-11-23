import { Component } from '@angular/core';

import { LoadingService } from 'projects/cp-lht-spinner/src/lib/loading.service';

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
