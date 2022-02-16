import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button[chevronButton]',
  templateUrl: './chevron-button.component.html',
  styleUrls: ['./chevron-button.component.css'],
})
export class ChevronButtonComponent {
  @Input() state: 'open' | 'close' = 'close';

  @HostListener('click')
  protected toggleState() {
    this.state === 'open' ? this.close() : this.open();
  }

  open() {
    this.state = 'open';
  }

  close() {
    this.state = 'close';
  }
}
