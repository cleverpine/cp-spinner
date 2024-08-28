import { Component, OnInit } from '@angular/core';

import { LhtSpinnerSettingsService } from '../services/lht-spinner-settings.service';

@Component({
  selector: 'lht-spinner',
  templateUrl: './lht-spinner.component.html',
  styleUrls: ['./lht-spinner.component.scss'],
})
export class LhtSpinnerComponent implements OnInit {
  size = this.lhtSpinnerSettingsService.libConfig.spinnerSize || 100;
  loadingText = this.lhtSpinnerSettingsService.libConfig.spinnerLoadingText || 'Loading...';

  constructor(private lhtSpinnerSettingsService: LhtSpinnerSettingsService) {}

  ngOnInit(): void {
    this.updateSpinnerSize(this.size);
  }

  private updateSpinnerSize(size: number | string): void {
    const sizeWithUnit = `${size}px`;
    document.documentElement.style.setProperty('--spinner-size', sizeWithUnit);
  }
}
