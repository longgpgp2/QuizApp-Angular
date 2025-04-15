import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './modules/app.component';
import { appConfig } from './modules/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
