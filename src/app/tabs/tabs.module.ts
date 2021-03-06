import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { JoinPageModule } from '../join/join.module';
import { ListPageModule } from '../list/list.module';
import { GridPageModule } from '../grid/grid.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    JoinPageModule,
    ListPageModule,
    GridPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
