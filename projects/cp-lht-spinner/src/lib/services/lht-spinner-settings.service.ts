import { Injectable, Inject } from '@angular/core';

import { LhtSpinnerLibConfig } from '../models/lht-spinner-lib-config';

@Injectable()
export class LhtSpinnerSettingsService {
  constructor(@Inject('config') private config: LhtSpinnerLibConfig) {}

  get libConfig() {
    return this.config;
  }

  setLibConfig(newConfig: LhtSpinnerLibConfig) {
    this.config = { ...this.config, ...newConfig };
  }
}
