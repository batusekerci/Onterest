import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportUserComponent } from './report-user/report-user.component';
import { BugReportComponent } from './bug-report/bug-report.component';
import { UserProfileSettingsComponent } from './user-profile-settings/user-profile-settings.component';
import { PostOntryComponent } from './post-ontry/post-ontry.component';
import { MessageComponent } from './message/message.component';
import { ClubReviewComponent } from './club-review/club-review.component';
import { SubClubReviewComponent } from './sub-club-review/sub-club-review.component';
import { RequestClubComponent } from './request-club/request-club.component';
import { RequestSubClubComponent } from './request-sub-club/request-sub-club.component';
import { SubClubAdminProfileComponent } from './sub-club-admin-profile/sub-club-admin-profile.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { SubClubComponent } from './sub-club/sub-club.component';
import { OntryPageComponent } from './ontry-page/ontry-page.component';
import { ClubDashboardComponent } from './club-dashboard/club-dashboard.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ScAdminReportManagementComponent } from './sc-admin-report-management/sc-admin-report-management.component';
import { ReportManagementComponent } from './report-management/report-management.component';
import { QuestManagementComponent } from './quest-management/quest-management.component';
import { SubClubDashboardComponent } from './sub-club-dashboard/sub-club-dashboard.component';
import { AdminSocialClubManagementComponent } from './admin-social-club-management/admin-social-club-management.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'deleteAccount', component: DeleteAccountComponent },
  { path: 'memberManagement', component: MemberManagementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'manageReport', component: ReportManagementComponent },
  { path: 'reportUser', component: ReportUserComponent },
  { path: 'bugReport', component: BugReportComponent },
  { path: 'userProfile', component: UserProfileSettingsComponent },
  { path: 'postOntry', component: PostOntryComponent },
  { path: 'message', component: MessageComponent },
  { path: 'clubReview', component: ClubReviewComponent },
  { path: 'subClubReview', component: SubClubReviewComponent },
  { path: 'requestClub', component: RequestClubComponent },
  { path: 'requestSubClub', component: RequestSubClubComponent },
  { path: 'subClubAdminProfile', component: SubClubAdminProfileComponent },
  { path: 'createEvent', component: CreateEventComponent },
  { path: 'subClubDashboard', component: SubClubDashboardComponent },
  { path: 'subClub', component: SubClubComponent },
  { path: 'ontryPage', component: OntryPageComponent },
  { path: 'clubDashboard', component: ClubDashboardComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'scAdminReportManagement', component: ScAdminReportManagementComponent },
  { path: 'questManagement', component: QuestManagementComponent },
  { path: 'adminScManagement', component: AdminSocialClubManagementComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
