
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
  private hideTimer: any = null;

  constructor(
    private overlay: Overlay,
    private lhtSpinnerSettingsService: LhtSpinnerSettingsService
  ) {}

  show(spinnerLoadingText?: string): void {
    this.requestsCount++;

    const delayTime =
      this.lhtSpinnerSettingsService.libConfig.spinnerShowDelayTime || 0;

    if (spinnerLoadingText) {
      this.lhtSpinnerSettingsService.setLibConfig({
        ...this.lhtSpinnerSettingsService.libConfig,
        spinnerLoadingText,
      });
    }

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
      return;
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
        this.removeOverlayRef(this.overlayRef);
      }
    }
  }

  private removeOverlayRef(overlayRef: OverlayRef): void {
    const hideDelay =
      this.lhtSpinnerSettingsService.libConfig.spinnerHideDelayTime;

    if (hideDelay) {
      this.hideTimer = setTimeout(() => {
        overlayRef.detach();
      }, hideDelay);
    } else {
      overlayRef.detach();
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
