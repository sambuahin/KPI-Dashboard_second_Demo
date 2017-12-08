import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnalystEmailComponent } from './analyst/analyst-email/analyst-email.component';
import { ExecuteAuthComponent } from './executive/execute-auth/execute-auth.component';
import { ExecutiveWelcomeComponent } from './executive/executive-welcome/executive-welcome.component';
import { ExeCharlotteComponent } from './executive/executive_time_to_fill/exe-charlotte/exe-charlotte.component';
import { MainTtfComponent } from './executive/executive_time_to_fill/main-ttf/main-ttf.component';
import { ExeSumterComponent } from './executive/executive_time_to_fill/exe-sumter/exe-sumter.component';
import { FyaMainComponent } from './executive/First_year_attn/fya-main/fya-main.component';
import { FyaCharlotteComponent } from './executive/First_year_attn/fya-charlotte/fya-charlotte.component';
import { FyaSumterComponent } from './executive/First_year_attn/fya-sumter/fya-sumter.component';

import { NavHeaderComponent } from './nav-header/nav-header.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },//sets the homepage
    { path: 'home', component: HomeComponent },

    { path: 'signup', component: SignupComponent },
     { path: 'analyst_email', component:  AnalystEmailComponent },
     { path: 'executive_auth', component:  ExecuteAuthComponent },
     { path: 'executive_welcome', component: ExecutiveWelcomeComponent, canActivate: [AuthGuard],
          children: [
          { path: '', redirectTo: 'main_ttf', pathMatch: 'full' },
       // { path: '', redirectTo: 'exe_charlotte', pathMatch: 'full' },
          { path: 'main_ttf', component: MainTtfComponent, canActivate: [AuthGuard]},
          { path: 'exe_sumter', component: ExeSumterComponent, canActivate: [AuthGuard]},
          { path: 'exe_charlotte', component: ExeCharlotteComponent, canActivate: [AuthGuard]},
          { path: 'fya_main', component: FyaMainComponent, canActivate: [AuthGuard]},
          { path: 'fya_charlotte', component: FyaCharlotteComponent, canActivate: [AuthGuard]},
          { path: 'fya_sumter', component: FyaSumterComponent, canActivate: [AuthGuard]}
         ]
  },

    { path: '**', component: PageNotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
