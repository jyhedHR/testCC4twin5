import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamModuleRoutingModule } from './team-module-routing.module';
import { TeamsComponentComponent } from '../componenet/teams-component/teams-component.component';
import { TeamComponentComponent } from '../componenet/team-component/team-component.component';
import { FormTeamComponentComponent } from '../componenet/form-team-component/form-team-component.component';
import { MyTeamsComponentsComponent } from '../componenet/my-teams-components/my-teams-components.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
     TeamsComponentComponent,
        TeamComponentComponent,
        FormTeamComponentComponent,
        MyTeamsComponentsComponent
  ],
  imports: [
    CommonModule,
    TeamModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeamModuleModule { }
