import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { environment } from 'src/environments/environment';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './profile/profile.component';
import { QuestManagementComponent } from './quest-management/quest-management.component';
import { SocialClubManagementComponent } from './social-club-management/social-club-management.component';
import { baseURL } from './shared/baseurl';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { SignUpService } from './services/sign-up.service';
import { HttpClientModule } from '@angular/common/http';
import { ReportUserComponent } from './report-user/report-user.component';
import { BugReportComponent } from './bug-report/bug-report.component';
import { UserProfileSettingsComponent } from './user-profile-settings/user-profile-settings.component';
import { PostOntryComponent } from './post-ontry/post-ontry.component';
import { MessageComponent } from './message/message.component';
import { ClubReviewComponent } from './club-review/club-review.component';
import { MatSelectModule } from '@angular/material/select';
import { SubClubReviewComponent } from './sub-club-review/sub-club-review.component';
import { RequestClubComponent } from './request-club/request-club.component';
import { RequestSubClubComponent } from './request-sub-club/request-sub-club.component';
import { SubClubAdminProfileComponent } from './sub-club-admin-profile/sub-club-admin-profile.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { SubClubDashboardComponent } from './sub-club-dashboard/sub-club-dashboard.component';
import { SubClubComponent } from './sub-club/sub-club.component';
import { OntryPageComponent } from './ontry-page/ontry-page.component';
import { ClubDashboardComponent } from './club-dashboard/club-dashboard.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ScAdminReportManagementComponent } from './sc-admin-report-management/sc-admin-report-management.component';
import { ReportManagementComponent } from './report-management/report-management.component';
import { AdminSocialClubManagementComponent } from './admin-social-club-management/admin-social-club-management.component';
import { BugReportService } from './services/bug-report.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from './services/user.service';
import { SubclubService } from './services/subclub.service';
import { SubclubMembershipService } from './services/subclub-membership.service';
import { ReportService } from './services/report.service';
import { QuestionnaireService } from './services/questionnaire.service';
import { OntryService } from './services/ontry.service';
import { MessageService } from './services/message.service';
import { LoginService } from './services/login.service';
import { CommentService } from './services/comment.service';
import { ClubAddService } from './services/club.service';
import { ClubMembershipService } from './services/club-membership.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    DeleteAccountComponent,
    MemberManagementComponent,
    ProfileComponent,

    QuestManagementComponent,
    SocialClubManagementComponent,
    ReportUserComponent,
    BugReportComponent,
    UserProfileSettingsComponent,
    PostOntryComponent,
    MessageComponent,
    ClubReviewComponent,
    SubClubReviewComponent,
    RequestClubComponent,
    RequestSubClubComponent,
    SubClubAdminProfileComponent,
    CreateEventComponent,
    SubClubDashboardComponent,
    SubClubComponent,
    OntryPageComponent,
    ClubDashboardComponent,
    QuestionnaireComponent,
    ScAdminReportManagementComponent,
    ReportManagementComponent,
    AdminSocialClubManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule

  ],
  exports: [

  ],
  providers: [
    ProcessHTTPMsgService,
    SignUpService,
    BugReportService,
    ClubMembershipService,
    ClubAddService,
    CommentService,
    LoginService,
    MessageService,
    OntryService,
    QuestionnaireService,
    ReportService,
    SubclubMembershipService,
    SubclubService,
    UserService,
    { provide: 'baseURL', useValue: baseURL },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
