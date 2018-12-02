import { ManageUserComponent } from './manage-user/manage-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { SettingsComponent } from './settings/settings.component';

const profileRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'manage-user',
                component: ManageUserComponent
            },
            {
                path: '',
                component: ProfileHomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule {}

