import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TabelComponent } from './app/tabel/tabel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabelComponent],
  template: `
    <app-tabel>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
