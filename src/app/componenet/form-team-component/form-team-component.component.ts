import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/model/Team';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-form-team-component',
  templateUrl: './form-team-component.component.html',
  styleUrls: ['./form-team-component.component.css']
})
export class FormTeamComponentComponent {


  constructor(private _activated:ActivatedRoute,private fb:FormBuilder,private _consumer:ConsumerService,private _r:Router){}
  teams: Team=new Team;
  Team!: FormGroup;
  id!:number;

  add(f: any) {
    console.log(f);
    if (this.id != undefined) {
      this._consumer
        .update<Team>('category', this.teams, this.id)
        .subscribe({
          next: () => this._r.navigate(['/team']),
        });
    }
    else {
      this._consumer.add<Team>('category', this.teams)
        .subscribe({
        next: () => this._r.navigate(['/home']),
      });
    }
}
}
