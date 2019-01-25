import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'network', component: DirectoryComponent },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/edit', component: EditProfileComponent },
    { path: 'project/edit', component: EditProjectComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/loggedin', component: LoginComponent },
    { path: 'login/welcome', component: LoginComponent },
    { path: 'login/password', component: LoginComponent },
    { path: 'login/register', component: LoginComponent },
    { path: 'login/create', component: LoginComponent },
    { path: 'login/confirm', component: LoginComponent },
    { path: 'login/add-details', component: LoginComponent },
    { path: 'login/add-work', component: LoginComponent },
    { path: 'login/send-details', component: LoginComponent },
    { path: 'login/confirm', component: LoginComponent },
    { path: 'login/pending', component: LoginComponent },
    { path: 'login/send-details', component: LoginComponent }
]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}