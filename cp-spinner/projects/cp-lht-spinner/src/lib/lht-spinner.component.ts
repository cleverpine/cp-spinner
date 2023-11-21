import { Component, Input } from '@angular/core';

@Component({
  selector: 'lht-spinner',
  templateUrl: './lht-spinner.component.html',
  styleUrls: ['./lht-spinner.component.scss'],
})
export class LhtSpinnerComponent {
  @Input() size = 100;
}
