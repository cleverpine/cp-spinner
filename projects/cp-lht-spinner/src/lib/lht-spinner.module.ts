import { NgModule } from '@angular/core';

import { LhtSpinnerComponent } from './lht-spinner.component';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [LhtSpinnerComponent, LoadingService],
  imports: [],
  exports: [LhtSpinnerComponent, LoadingService],
})
export class CpSpinnerModule {}
