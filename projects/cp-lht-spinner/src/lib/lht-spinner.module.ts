import { ModuleWithProviders, NgModule } from '@angular/core';

import { LhtSpinnerComponent } from './component/lht-spinner.component';

import { LhtSpinnerLibConfig } from './models/lht-spinner-lib-config';

import { LhtSpinnerSettingsService } from '../lib/services/lht-spinner-settings.service';

@NgModule({
  declarations: [LhtSpinnerComponent],
  imports: [],
  exports: [LhtSpinnerComponent],
})
export class LhtSpinnerModule {
  static forRoot(
    config: LhtSpinnerLibConfig
  ): ModuleWithProviders<LhtSpinnerModule> {
    return {
      ngModule: LhtSpinnerModule,
      providers: [
        LhtSpinnerSettingsService,
        { provide: 'config', useValue: config },
      ],
    };
  }
}
