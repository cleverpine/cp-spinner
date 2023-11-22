import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { LhtSpinnerComponent } from 'projects/cp-lht-spinner/src/lib/lht-spinner.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private overlayRef: OverlayRef | null = null;
  private requestsCount = 0;

  constructor(private overlay: Overlay) {}

  show(): void {
    this.requestsCount++;

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    if (!this.overlayRef.hasAttached()) {
      const loaderPortal = new ComponentPortal(LhtSpinnerComponent);
      this.overlayRef.attach(loaderPortal);
    }
  }

  hide(): void {
    this.requestsCount--;

    if (this.overlayRef && this.requestsCount === 0) {
      this.overlayRef.detach();
    }
  }
}
