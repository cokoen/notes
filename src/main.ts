import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TabelComponent } from './app/tabel/tabel.component';
import { CloudComponent } from './app/cloud/cloud.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabelComponent, CloudComponent],
  template: `
    <app-cloud>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(HttpClientModule), provideAnimations(), importProvidersFrom(MatNativeDateModule)],
});
