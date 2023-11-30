import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { LhtSpinnerComponent } from '../component/lht-spinner.component';

import { LhtSpinnerSettingsService } from './lht-spinner-settings.service';

@Injectable({
  providedIn: 'root',
})
export class LhtLoadingService {
  private overlayRef: OverlayRef | null = null;
  private requestsCount = 0;
  private showTimer: any = null;

  constructor(
    private overlay: Overlay,
    private lhtSpinnerSettingsService: LhtSpinnerSettingsService
  ) {}

  show(): void {
    this.requestsCount++;

    const delayTime =
      this.lhtSpinnerSettingsService.libConfig.spinnerDelayTime || 0;

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    if (this.showTimer === null) {
      if (delayTime > 0) {
        this.showTimer = setTimeout(() => {
          this.attachSpinner();
        }, delayTime);
      } else {
        this.attachSpinner();
      }
    }
  }

  hide(): void {
    this.requestsCount--;

    if (this.requestsCount <= 0) {
      if (this.showTimer !== null) {
        clearTimeout(this.showTimer);
        this.showTimer = null;
      }

      this.requestsCount = 0;

      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.overlayRef.detach();
      }
    }
  }

  private attachSpinner(): void {
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      const loaderPortal = new ComponentPortal(LhtSpinnerComponent);
      this.overlayRef.attach(loaderPortal);
    }

    this.showTimer = null;
  }
}
