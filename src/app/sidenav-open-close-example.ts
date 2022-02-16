import { Component } from '@angular/core';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'sidenav-open-close-example',
  templateUrl: 'sidenav-open-close-example.html',
  styleUrls: ['sidenav-open-close-example.css'],
})
export class SidenavOpenCloseExample {
  events: string[] = [];
  isMenuOpened = true;
  contentMargin = 240;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );

  onSideNavToggle() {
    this.isMenuOpened = !this.isMenuOpened;
    if (!this.isMenuOpened) {
      this.contentMargin = 70;
    }
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
