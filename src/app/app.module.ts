import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DropdownModule } from 'ngx-dropdown';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ProfileJourneyComponent } from './profile-journey/profile-journey.component';
import { PostCardComponent } from './post-card/post-card.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { CreateBroadcastComponent } from './create-broadcast/create-broadcast.component';
import { SidebarFilterItemComponent } from './sidebar-filter-item/sidebar-filter-item.component';
import { StatusPostComponent } from './status-post/status-post.component';
import { PostAuthorComponent } from './post-author/post-author.component';
import { PostActivityIconsComponent } from './post-activity-icons/post-activity-icons.component';
import { DirectoryComponent } from './directory/directory.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { ProfileAddModalComponent } from './profile-add-modal/profile-add-modal.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { FeatureHeroComponent } from './feature-hero/feature-hero.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';
import { CreateButtonComponent } from './create-button/create-button.component';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { LoginComponent } from './login/login.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent, TooltipContainerDirective } from './tooltip/tooltip.component';
import { ForTooltipComponent } from './tooltip/for-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileSectionComponent,
    ProfileJourneyComponent,
    PostCardComponent,
    EditProfileComponent,
    ProjectComponent,
    HomeComponent,
    CreateBroadcastComponent,
    SidebarFilterItemComponent,
    StatusPostComponent,
    PostAuthorComponent,
    PostActivityIconsComponent,
    DirectoryComponent,
    PostModalComponent,
    ProfileAddModalComponent,
    EditProjectComponent,
    FeatureHeroComponent,
    StatisticsComponent,
    UserCardComponent,
    CreatePostModalComponent,
    CreateButtonComponent,
    WelcomeModalComponent,
    LoginComponent,
    TooltipComponent,
    TooltipDirective,
    ForTooltipComponent,
    TooltipContainerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule
  ],
  entryComponents: [
    TooltipComponent,
    ForTooltipComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
