import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'login'},
            {path: 'login', loadChildren: './login/login.module#LoginModule'},
            {path: 'register', loadChildren: './register/register.module#RegisterModule'}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {
}
