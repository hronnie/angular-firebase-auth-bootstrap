import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModulesPro, MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import {Store} from '../store';
import {AuthModule} from './core/auth/auth.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModulesPro.forRoot(),
        AuthModule
    ],
    providers: [
        MDBSpinningPreloader,
        Store,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
