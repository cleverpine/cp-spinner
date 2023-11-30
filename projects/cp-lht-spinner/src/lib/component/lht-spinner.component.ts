import { Component } from '@angular/core';

import { LhtSpinnerSettingsService } from '../services/lht-spinner-settings.service';

@Component({
  selector: 'lht-spinner',
  templateUrl: './lht-spinner.component.html',
  styleUrls: ['./lht-spinner.component.scss'],
})
export class LhtSpinnerComponent {
  constructor(private lhtSpinnerSettingsService: LhtSpinnerSettingsService) {}

  size = this.lhtSpinnerSettingsService.libConfig.spinnerSize || 100;
}
