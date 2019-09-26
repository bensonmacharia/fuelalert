import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutPageModule'
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: '../contact/contact.module#ContactPageModule'
          }
        ]
      },
      {
        path: 'signs',
        children: [
          {
            path: '',
            loadChildren: '../signs/signs.module#SignsPageModule'
          }
        ]
      },
      {
        path: 'prices',
        children: [
          {
            path: '',
            loadChildren: '../prices/prices.module#PricesPageModule'
          }
        ]
      },
      {
        path: 'feedback',
        children: [
          {
            path: '',
            loadChildren: '../feedback/feedback.module#FeedbackPageModule'
          }
        ]
      },
      {
        path: 'report',
        children: [
          {
            path: '',
            loadChildren: '../report/report.module#ReportPageModule'
          }
        ]
      },
      {
        path: 'reported',
        children: [
          {
            path: '',
            loadChildren: '../reported/reported.module#ReportedPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
