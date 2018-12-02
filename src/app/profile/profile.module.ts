import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Components used in Profile Module
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

// routing module for Profile
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent,
        ProfileHomeComponent,
        SettingsComponent,
        ManageUserComponent
    ]
})
export class ProfileModule {}


