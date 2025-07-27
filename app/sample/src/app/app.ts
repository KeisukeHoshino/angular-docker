import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    HomeComponent,
  ],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  // templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sample');
}
