import {Routes} from '@angular/router';

export const schemaDBRoutes: Routes = [

{
  path:'home',
  loadComponent:()=>import('./home-page/home-page.component').then(m=>m.HomePageComponent)
},
{
  path:'services',
  loadComponent:()=>import('./services-home/services-home.component').then(m=>m.ServicesHomeComponent)
},
{
  path:'about',
  loadComponent:()=>import('./about-us/about-us.component').then(m=>m.AboutUsComponent)
},
{
  path:'explore',
  loadComponent:()=>import('./explore-more/explore-more.component').then(m=>m.ExploreMoreComponent)
},
{
  path:'contact',
  loadComponent:()=>import('./contact-us/contact-us.component').then(m=>m.ContactUsComponent)
},
];
