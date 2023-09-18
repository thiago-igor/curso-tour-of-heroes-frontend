import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {environmet} from './environments/environment';

if(environmet.production){{
  enableProdMode();
}}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
