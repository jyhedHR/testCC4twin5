import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponentComponent } from '../componenet/teams-component/teams-component.component';
import { TeamComponentComponent } from '../componenet/team-component/team-component.component';
import { FormTeamComponentComponent } from '../componenet/form-team-component/form-team-component.component';

const routes: Routes = [
  {path:'',component:TeamsComponentComponent },
  {path:'addteam',component:FormTeamComponentComponent },
  {path:'myteam',component:TeamComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamModuleRoutingModule { }
