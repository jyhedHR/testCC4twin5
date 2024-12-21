import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './componenet/not-found/not-found.component';
import { HomeComponent } from './componenet/home/home.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/team/', pathMatch: 'full' },

  {
    path: 'team',
    loadChildren: () =>
      import('./team-module/team-module.module')
        .then((m) => m.TeamModuleModule),
  },
  {
    path: 'participant',
    loadChildren: () =>
      import('./participant-module/participant-module.module')
        .then((m) => m.ParticipantModuleModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
