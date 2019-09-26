import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { SignsPageModule } from '../signs/signs.module';
import { PricesPageModule } from '../prices/prices.module';
import { FeedbackPageModule } from '../feedback/feedback.module';
import { ReportPageModule } from '../report/report.module';
import { ReportedPageModule } from '../reported/reported.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    SignsPageModule,
    PricesPageModule,
    FeedbackPageModule,
    ReportPageModule,
    ReportedPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
