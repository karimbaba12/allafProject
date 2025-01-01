<<<<<<< HEAD
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

=======
>>>>>>> 667df993ee86f11a32f22ec391b8ad440c13b248
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

<<<<<<< HEAD
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...(appConfig.providers || []), provideHttpClient()],
}).catch((err) => console.error(err));
=======

bootstrapApplication(AppComponent, {
  ...appConfig, 
  providers: [
    ...appConfig.providers || [], 
    provideHttpClient() 
  ]
})
.catch((err) => console.error(err));
>>>>>>> 667df993ee86f11a32f22ec391b8ad440c13b248
