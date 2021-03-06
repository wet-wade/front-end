import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsDashboardComponent } from './groups-dashboard/groups-dashboard.component';
import { GroupsRoutingModule } from './groups-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GroupSettingsComponent } from './group-settings/group-settings.component';
import { JoinGroupComponent } from './join-group/join-group.component';

@NgModule({
  declarations: [GroupsDashboardComponent, GroupSettingsComponent, JoinGroupComponent],
  imports: [CommonModule, GroupsRoutingModule, SharedModule],
})
export class GroupsModule {}
