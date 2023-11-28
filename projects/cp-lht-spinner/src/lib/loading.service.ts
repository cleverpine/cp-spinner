import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { LhtSpinnerComponent } from '../lib/lht-spinner.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private overlayRef: OverlayRef | null = null;
  private requestsCount = 0;
  private showTimer: any = null;

  constructor(private overlay: Overlay) {}

  show(): void {
    this.requestsCount++;

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    if (this.showTimer === null) {
      this.showTimer = setTimeout(() => {
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
          const loaderPortal = new ComponentPortal(LhtSpinnerComponent);
          this.overlayRef.attach(loaderPortal);
        }
        this.showTimer = null;
      }, 300);
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
}
