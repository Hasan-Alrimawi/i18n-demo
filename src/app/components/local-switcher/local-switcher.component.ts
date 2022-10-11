import { Component, Inject, LOCALE_ID } from '@angular/core';
@Component({
  selector: 'app-local-switcher',
  templateUrl: './local-switcher.component.html',
  styleUrls: ['./local-switcher.component.css']
})
export class LocalSwitcherComponent{

  locales = [
    { code: 'en-US', name: 'English' },
    { code: 'es-PR', name: 'Español' },
  ];
  constructor(
    @Inject(LOCALE_ID) public activeLocale: string
  ) { }
  onChange() {
    window.location.href = `/${this.activeLocale}`;
  }

}
