import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireModule, FirebaseAppConfig} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';


import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from './shared/shared.module';
import {firebaseConfig} from '../../config/firebaseConfig';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {
}
