import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './scenes/dashboard/dashboard.component';
import {AuthGuard} from './core/auth/shared/guards/auth.guard';
import {LoginComponent} from './core/auth/login/login.component';
import {RegisterComponent} from './core/auth/register/register.component';
import {ForgotPasswordComponent} from './core/auth/forgot-password/forgot-password.component';
import {VerifyEmailAddressComponent} from './core/auth/verify-email-address/verify-email-address.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./scenes/dashboard/dashboard.module')
                    .then(module => module.DashboardModule), canActivate: []
            },
            {
                path: 'know-how',
                loadChildren: () => import('./scenes/know-how/know-how.module')
                    .then(module => module.KnowHowModule), canActivate: [AuthGuard]
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./core/auth/login/login.module')
                    .then(module => module.LoginModule)
            }
        ]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./core/auth/forgot-password/forgot-password.module')
                    .then(module => module.ForgotPasswordModule)
            }
        ]
    },
    {
        path: 'verify-email-address',
        component: VerifyEmailAddressComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./core/auth/verify-email-address/verify-email-address.module')
                    .then(module => module.VerifyEmailAddressModule)
            }
        ]
    },
    {
        path: 'register',
        component: RegisterComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./core/auth/register/register.module')
                    .then(module => module.RegisterModule)
            }
        ]
    },
    {path: '**', redirectTo: '/404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
