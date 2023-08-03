import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-testComponent
import { testComponent } from '../components/test/test.component';
//CORE_REFERENCE_IMPORT-FooterComponent
import { FooterComponent } from '../components/Footer/Footer.component';
//CORE_REFERENCE_IMPORT-HomeComponent
import { HomeComponent } from '../components/Home/Home.component';
//CORE_REFERENCE_IMPORT-RegistrationComponent
import { RegistrationComponent } from '../components/Registration/Registration.component';
//CORE_REFERENCE_IMPORT-Forget_passwordComponent
import { Forget_passwordComponent } from '../components/Forget_password/Forget_password.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/login/login.component';
//CORE_REFERENCE_IMPORT-latest_blogsComponent
import { latest_blogsComponent } from '../components/latestBlogs/latest_blogs.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboard/dashboard.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-testComponent
  testComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-FooterComponent
  FooterComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeComponent
  HomeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-RegistrationComponent
  RegistrationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-Forget_passwordComponent
  Forget_passwordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-latest_blogsComponent
  latest_blogsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
  dashboardComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'dashboard', component: dashboardComponent },
  { path: 'user-home', component: HomeComponent },
  { path: 'login', component: loginComponent },
  { path: 'fotgetpassword', component: Forget_passwordComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'test', component: testComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
