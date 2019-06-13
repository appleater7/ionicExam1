import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'join', loadChildren: './join/join.module#JoinPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
